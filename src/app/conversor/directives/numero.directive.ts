import { Directive, HostListener, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Directive({
  selector: '[numero]',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: NumeroDirective,
      multi: true,
    },
  ],
})
export class NumeroDirective implements ControlValueAccessor {
  onTouched: any;
  onChange: any;

  constructor(private el: ElementRef) {}

  // Implementa evento de keyup para o elemento da diretiva
  @HostListener('keyup', ['$event'])
  onKeyUp($event: any) { // OnKeyUp ao pressionar a tela
    let valor = $event.target.value; // obter o valor do campo de texto
    let posDecimais = valor.indexOf('.'); // Formatação com . para separar os decimais

    valor = valor.replace(/[\D]/g, ''); // Remove tudo que nao for numero e substitui por ''

    if (posDecimais > 0) { // Caso os decimais seja maior que 0
      valor = valor.substr(0, posDecimais) + '.' + valor.substr(posDecimais); //Adiciona o . e adiciona os valores dos decimais em seguida
    }

    $event.target.value = valor; // Adiciona o valor no campo de texto
    this.onChange(valor);
  }

  registerOnChange(fn: any): void { // Registra a função a ser chamada para atualizar o valor na model.
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void { // Registra a função a ser chamada para atualizar o valor na model para o evento touched (mobile)
    this.onTouched = fn;
  }

  writeValue(value: any): void { // Vai obter o valor contido na model
    this.el.nativeElement.value = value;
  }
}
