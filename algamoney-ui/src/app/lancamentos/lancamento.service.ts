import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import * as moment from 'moment';
import { Lancamento } from '../core/model';
import { environment } from 'src/environments/environment';

export class LancamentoFiltro {
  descricao: string;
  dataVencimentoInicio: Date;
  dataVencimentoFim: Date;
  pagina = 0;
  itensPorPagina = 5;
}

@Injectable({
  providedIn: 'root'
})
export class LancamentoService {

  lancamentosUrl: string;

  constructor(private http: HttpClient) {
    this.lancamentosUrl = `${environment.apiUrl}/lancamentos`;
  }

  pesquisar(filtro: LancamentoFiltro): Promise<any> {
    // const headers = new HttpHeaders().append('Authorization', 'Basic YWRtaW5AYWxnYW1vbmV5LmNvbTphZG1pbg==');
    let params = new HttpParams();

    params = params.set('page', filtro.pagina.toString());
    params = params.set('size', filtro.itensPorPagina.toString());

    if (filtro.descricao) {
      params = params.set('descricao', filtro.descricao);
    }

    if (filtro.dataVencimentoInicio) {
      params = params.set('dataVencimentoDe', moment(filtro.dataVencimentoInicio).format('YYYY-MM-DD'));
    }

    if (filtro.dataVencimentoFim) {
      params = params.set('dataVencimentoAte', moment(filtro.dataVencimentoFim).format('YYYY-MM-DD'));
    }

    return this.http.get(`${this.lancamentosUrl}?resumo`, { params })
      // return this.http.get(`${this.lancamentosUrl}?resumo`, { headers, params })
      .toPromise()
      .then(response => {
        const lancamentos = response['content']
        const resultado = {
          lancamentos,
          total: response['totalElements']
        };
        return resultado;
      });
  }

  excluir(codigo: number): Promise<any> {
    return this.http.delete(`${this.lancamentosUrl}/${codigo}`)
      .toPromise();
  }

  adicionar(lancamento: Lancamento): Promise<Lancamento> {
    return this.http.post<Lancamento>(
      this.lancamentosUrl, lancamento)
      .toPromise();
  }

  atualizar(lancamento: Lancamento): Promise<Lancamento> {
    // const headers = new HttpHeaders().append('Content-Type', 'application/json');
    return this.http.put(`${this.lancamentosUrl}/${lancamento.codigo}`,
      lancamento)
      // lancamento, { headers })
      .toPromise()
      .then(response => {
        const lancamentoAlterado = response as Lancamento;

        this.converterStringsParaDatas([lancamentoAlterado]);

        return lancamentoAlterado;
      });
  }

  buscarPorCodigo(codigo: number): Promise<Lancamento> {
    return this.http.get(`${this.lancamentosUrl}/${codigo}`)
      .toPromise()
      .then(response => {
        const lancamento = response as Lancamento;

        this.converterStringsParaDatas([lancamento]);

        return lancamento;
      });
  }

  private converterStringsParaDatas(lancamentos: Lancamento[]) {
    for (const lancamento of lancamentos) {
      lancamento.dataVencimento = moment(lancamento.dataVencimento,
        'YYYY-MM-DD').toDate();

      if (lancamento.dataPagamento) {
        lancamento.dataPagamento = moment(lancamento.dataPagamento,
          'YYYY-MM-DD').toDate();
      }
    }
  }

}
