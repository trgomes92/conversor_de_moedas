import { Injectable } from '@angular/core';

import { Moeda } from '../models';

@Injectable({
  providedIn: 'root',
})
export class MoedaService {
  private moedas: Moeda[];

  constructor() { }

  private moedasObj = [
    { symbols: 'AUD', descricao: 'Dólar australiano' },
    { symbols: 'BGN', descricao: 'Lev búlgaro' },
    { symbols: 'BRL', descricao: 'Real brasileiro' },
    { symbols: 'CAD', descricao: 'Dólar canadense' },
    { symbols: 'CHF', descricao: 'Franco suíço' },
    { symbols: 'CNY', descricao: 'Yuan Chinês' },
    { symbols: 'CZK', descricao: 'Coroa República Tcheca' },
    { symbols: 'DKK', descricao: 'Coroa dinamarquesa' },
    { symbols: 'EUR', descricao: 'Euro' },
    { symbols: 'GBP', descricao: 'Libra Esterlina' },
    { symbols: 'HKD', descricao: 'Dólar de Hong Kong' },
    { symbols: 'HRK', descricao: 'Coroa Croácia' },
    { symbols: 'HUF', descricao: 'Florim húngaro' },
    { symbols: 'IDR', descricao: 'Rupia indonésia' },
    { symbols: 'ILS', descricao: 'Novo shekel israelense' },
    { symbols: 'INR', descricao: 'Rupia indiana' },
    { symbols: 'JPY', descricao: 'Iene japonês' },
    { symbols: 'KRW', descricao: 'Won sul-coreano' },
    { symbols: 'MXN', descricao: 'Peso mexicano' },
    { symbols: 'MYR', descricao: 'Malásia Ringgit' },
    { symbols: 'NOK', descricao: 'Coroa Noruega' },
    { symbols: 'NZD', descricao: 'Dólar da Nova Zelândia' },
    { symbols: 'PHP', descricao: 'Peso filipino' },
    { symbols: 'PLN', descricao: 'Złoty Polónia' },
    { symbols: 'RON', descricao: 'Leu romeno' },
    { symbols: 'RUB', descricao: 'Belarus Ruble' },
    { symbols: 'SEK', descricao: 'Coroa Suécia' },
    { symbols: 'SGD', descricao: 'Dólar de Singapura' },
    { symbols: 'THB', descricao: 'Baht Tailândia' },
    { symbols: 'TRY', descricao: 'Lira turca' },
    { symbols: 'USD', descricao: 'Dólar dos Estados Unidos' },
    { symbols: 'ZAR', descricao: 'Rand África do Sul' },
  ];

  listarTodas(): Moeda[] {
    if (this.moedas) {
      return this.moedas;
    }
    this.moedas = [];

    for (let moedaObj of this.moedasObj) {
      let moeda: Moeda = new Moeda();
      Object.assign(moeda, moedaObj);
      this.moedas.push(moeda);
    }
    return this.moedas;
  }
}
