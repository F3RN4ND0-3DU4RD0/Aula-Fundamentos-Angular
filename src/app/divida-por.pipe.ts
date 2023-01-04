import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dividaPor'
})
export class DividaPorPipe implements PipeTransform {

  transform(dividendo: number, divisor: number): number {
    return dividendo / divisor;
  }

}
