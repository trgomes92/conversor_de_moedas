export class Conversao { // Classe para representar o formulario de conversao composto com o valor, a moeda de origem e a moeda de destino.

  constructor( // 3 Atributos
    public moedaDe?: string, // Moeda de origem
    public moedaPara?: string, // Moeda de destino
    public valor?: number // valor 
  ) {}
}
