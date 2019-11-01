import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatMoney'
})
export class FormatMoneyPipe implements PipeTransform {

  transform(value: number): any {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }

}
