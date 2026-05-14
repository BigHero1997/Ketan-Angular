import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeCurrencyConvert',
})
export class PipeCurrencyConvertPipe implements PipeTransform {
  transform(amount: number, rate: number): number {
    return amount*rate;
  }
}
