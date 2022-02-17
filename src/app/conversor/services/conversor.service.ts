import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Modulo HTTP
import { Observable } from 'rxjs/Observable';

import { Conversao, ConversaoResponse } from '../models';

@Injectable({
  providedIn: 'root',
})
export class ConversorService {
  params(params: any) {
    throw new Error('Method not implemented.');
  }

  // Constante com URL contendo a API a ser consultada

  private readonly BASE_URL = 'https://api.exchangerate.host/';

  constructor(private http: HttpClient) { }

  /** 
   * Realiza a chamada para a API de conversão de moedas
   * Metodo que faz a conversão
   * Moeda de origem e moeda de destino
   */
  converter(conversao: Conversao): Observable<any> {
    let params = `convert?from=${conversao.moedaDe}&to=${conversao.moedaPara}`;
    return this.http // Chama o serviço HTTP
      .get(this.BASE_URL + params); // Recebe a URL base com os parametros "from" e "to".
  }

  /**
   * Retorna a cotação de um dado para uma response.
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return number // Retorna o valor 
   */
  cotacaoPara( // Recebe a cotacao response
    conversaoResponse: ConversaoResponse,
    conversao: Conversao
  ): number { 
    if (conversaoResponse === undefined) { // Verifica se a resposta no servidor existe
      return 0;
    }
    return conversaoResponse.rate[conversao.moedaPara]; // Retorna a conversao para a moeda de destino.

  }
  /**
   * Vai retornar a cotação.
   * @param ConversaoResponse conversaoResponse
   * @param Conversao conversao
   * @return string 
   */

  cotacaoDe(conversaoResponse: ConversaoResponse,
    conversao: Conversao): string {   // Retorna a cotação dado uma response
    if (conversaoResponse === undefined) { 
      return '0'; // Se não existir retorna 0
    }
    // Caso contrario retorna 1 e divide pela moeda de destino.
    return (1 / conversaoResponse.rate[conversao.moedaPara]).toFixed(4); 
  }
  /**
   * Retorna a data da cotação.
   * @param ConversaoResponse conversaoResponse
   * @return string
   */
  dataCotacao(conversaoResponse: ConversaoResponse): string { 
    if (conversaoResponse === undefined) { // verifica se existe uma resposta
      return '';
    }
    return conversaoResponse.date; // retorna a data da cotação

  }
}
