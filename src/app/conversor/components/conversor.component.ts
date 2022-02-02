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

  moedas: Moeda[];
  conversao: Conversao;
  possuiErro: boolean;
  conversaoResponse: ConversaoResponse;

  @ViewChild('conversaoForm', { static: true }) conversaoForm: NgForm;

  constructor(
    private moedaService: MoedaService,
    private conversorService: ConversorService
  ) { }



  ngOnInit(): void {
    this.moedas = this.moedaService.listarTodas();
    this.init();
  }

  init(): void {
    this.conversao = new Conversao(null);
    this.possuiErro = false;
    
  }

  converter(): void {
    if (this.conversaoForm.form.valid) {
      this.conversorService
        .converter(this.conversao)
        .subscribe(
          response => {
            let rates = [];
            rates[response.query.to] = response.result;
            this.conversaoResponse = new ConversaoResponse(
              response.query.from,
              response.date,
              rates
            );
          },
          error => this.possuiErro = true
        );
    }
  }
}




