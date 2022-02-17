import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { ConversorComponent } from './components'; // Modulo do conversor
import { MoedaService, ConversorService } from './services'; // Modulo Moedas e Services
import { NumeroDirective } from './directives'; // Modulo das Diretivas
import { ModalCotacaoComponent } from './utils'; // Modulo do Modal
import { DataBrPipe } from './pipes'; // modulo pipes

@NgModule({
  declarations: [
    ConversorComponent,
    NumeroDirective,
    ModalCotacaoComponent,
    DataBrPipe,
  ],
  imports: [CommonModule, HttpClientModule, FormsModule],
  exports: [ConversorComponent],
  providers: [MoedaService, ConversorService],
})
export class ConversorModule {}
