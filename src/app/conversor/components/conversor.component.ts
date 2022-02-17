import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Moeda, Conversao, ConversaoResponse } from '../models';
import { MoedaService, ConversorService } from '../services';


@Component({
  selector: 'app-conversor',
  templateUrl: './conversor.component.html',
  styleUrls: ['./conversor.component.css'],
})
export class ConversorComponent implements OnInit {
  [x: string]: any;

  description = ' Por favor selecione a moeda a ser convertida.';

  moedas: Moeda[]; // Lista de moedas
  conversao: Conversao; // Modo de conversao (Armazena o valor MoedaDe e MoedaPara)
  possuiErro: boolean; // Verifica se possui erro e se sera exibido ou não a mensagem de erro
  conversaoResponse: ConversaoResponse; // Retorno da consulta com os valores da conversão

  @ViewChild('conversaoForm', { static: true }) conversaoForm: NgForm; // Conversor form do tipo NgForm, que fara a ligação entre o formulario e o atributo de classe

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) { }



  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas(); // Fara o load da lista das moedas do serviço.
    this.init(); 
  }

// Inicializa o codigo chamando o objeto "conversao", e define as moedas padrão ex: ('USD', 'BRL', null)

  init(): void {
    this.conversao = new Conversao(null); 
    this.possuiErro = false;
    
  }

// O metodo converter obtem os dados da api
  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.conversorService
        .converter(this.conversao)
        .subscribe( // O subscribe vai se inscrever para receber o retorno do Observable onde ele recebera os dados
          response => { // Recebe os dados de retorno contendo os rates e a data da conversao
            let rates = [];
            rates[response.query.to] = response.result;
            this.conversaoResponse = new ConversaoResponse(
              response.query.from,
              response.date,
              rates
            );
          },
          error => this.possuiErro = true // Se o erro for True sera exibido a mensagem de erro
        );
    }
  }
}




