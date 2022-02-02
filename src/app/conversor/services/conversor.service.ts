import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { Conversao, ConversaoResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {

  private readonly BASE_URL =
    'https://api.exchangerate.host/';

  constructor(private http: HttpClient) { }

  converter(conversao: Conversao): Observable<any> {
    let params = `convert?from=${conversao.moedaDe}&to=${conversao.moedaPara}`;
    return this.http.get(this.BASE_URL + params);

    
  }
  /**
   * Retorna a cotação para dado uma response.
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number
   */
  cotacaoPara(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): number {
    if (conversaoResponse === undefined) {
      return 0;
    }
    return conversaoResponse.rate[conversao.moedaPara];

  }
  /**
   * Retorna a cotação de dado uma response.
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string
   */
  cotacaoDe(
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): string {
    if (conversaoResponse === undefined) {
      return '0';
    }
    return (1 / conversaoResponse.rate[conversao.moedaPara]).toFixed(4);
  }
  /**
   * Retorna a data da cotação dado uma response.
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string {
    if (conversaoResponse === undefined) {
      return '';
    }
    return conversaoResponse.date;
    
  }
}
