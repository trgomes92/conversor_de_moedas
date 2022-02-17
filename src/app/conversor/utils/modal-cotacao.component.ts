import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ConversaoResponse, Conversao } from '../models';
import { ConversorService } from '../services';

@Component({
  selector: 'modal-cotacao',
  templateUrl: './modal-cotacao.component.html',
  styleUrls: ['./modal-cotacao.component.css'],
})

// Fara a comunicação entre componentes para receber as informações da conversao na janela da modal
export class ModalCotacaoComponent implements OnInit {

// o @input recebe os parametros externos de outros componentes
  @Input() id: string; 
  @Input() conversaoResponse: ConversaoResponse;
  @Input() conversao: Conversao = new Conversao();
  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();


  constructor(private conversorService: ConversorService) {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  novaConsulta(){
    this.onConfirm.emit();
  }

  get valorConvertido(): string { // Vai tratar o valor convertido e retornar o valor que nos desejamos
    if (this.conversaoResponse === undefined ) {
      return '0'; // Caso não tenha resposta ele retorna 0
    }

    return (
      
      this.conversao.valor * // Multiplica o valor informado taxa equivalente a moedaPara
      this.conversaoResponse.rate[this.conversao.moedaPara]
    ).toFixed(2);
  }
 

  get cotacaoPara(): number { // Retorna a cotação o da moedaPara
    return this.conversorService.cotacaoPara(
      this.conversaoResponse,
      this.conversao
    );
  }

  get cotacaoDe(): string { // Retorna a cotação da moeda selecioda moedaDe
    return this.conversorService.cotacaoDe(
      this.conversaoResponse,
      this.conversao
    );
  }

  get dataCotacao(): string { // Retorna a data da conversão
    return this.conversorService.dataCotacao(this.conversaoResponse);
  }
}
