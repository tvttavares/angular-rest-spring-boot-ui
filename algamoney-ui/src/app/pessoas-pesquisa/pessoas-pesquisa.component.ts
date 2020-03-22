import { Component } from '@angular/core';

@Component({
  selector: 'app-pessoas-pesquisa',
  templateUrl: './pessoas-pesquisa.component.html',
  styleUrls: ['./pessoas-pesquisa.component.css']
})
export class PessoasPesquisaComponent {
  pessoas = [
    { nome: 'Manoel Pinheiro', cidade: 'Uberlandia', estado: 'MG', ativo: true },
    { nome: 'Thiago Tavares', cidade: 'Nova Xavantina', estado: 'MT', ativo: true },
    { nome: 'Carolina Vieira', cidade: 'Cuiaba', estado: 'MT', ativo: false },
    { nome: 'Aline Dummond', cidade: 'Porto Alegre', estado: 'RS', ativo: true },
    { nome: 'Marisa Fernanda', cidade: 'Sao Paulo', estado: 'SP', ativo: false },
    { nome: 'Helio Carlos', cidade: 'Uberlandia', estado: 'MG', ativo: true },
    { nome: 'Zila Marques', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: true },
    { nome: 'Ana Silva', cidade: 'Campo Grande', estado: 'MS', ativo: true },
    { nome: 'Sebastião da Silva', cidade: 'São Paulo', estado: 'SP', ativo: false },
    { nome: 'Carla Souza', cidade: 'Florianópolis', estado: 'SC', ativo: true },
    { nome: 'Luís Pereira', cidade: 'Curitiba', estado: 'PR', ativo: true },
    { nome: 'Vilmar Andrade', cidade: 'Rio de Janeiro', estado: 'RJ', ativo: false },
    { nome: 'Paula Maria', cidade: 'Uberlândia', estado: 'MG', ativo: true }
  ];
}
