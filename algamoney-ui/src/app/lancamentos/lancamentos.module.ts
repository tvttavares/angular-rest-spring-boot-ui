import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InputTextModule } from 'primeng/inputtext/inputtext';
import { ButtonModule } from 'primeng/button/button';
import { TableModule } from 'primeng/table/table';
import { TooltipModule } from 'primeng/tooltip/tooltip';
import { InputTextareaModule } from 'primeng/inputtextarea/public_api';
import { CalendarModule } from 'primeng/calendar/calendar';
import { SelectButtonModule } from 'primeng/selectbutton/public_api';
import { DropdownModule } from 'primeng/dropdown/dropdown';
import { InputMaskModule } from 'primeng/inputmask/inputmask';
import { NgxCurrencyModule } from 'ngx-currency';

import { LancamentoCadastroComponent } from './lancamento-cadastro/lancamento-cadastro.component';
import { LancamentosPesquisaComponent } from './lancamentos-pesquisa/lancamentos-pesquisa.component';
import { LancamentosGridComponent } from './lancamentos-grid/lancamentos-grid.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,

    InputTextModule,
    ButtonModule,
    TableModule,
    TooltipModule,
    InputTextareaModule,
    CalendarModule,
    SelectButtonModule,
    DropdownModule,
    NgxCurrencyModule,
    InputMaskModule
  ],
  declarations: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent,
    LancamentosGridComponent
  ],
  exports: [
    LancamentoCadastroComponent,
    LancamentosPesquisaComponent
  ]
})
export class LancamentosModule { }
