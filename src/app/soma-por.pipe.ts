import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'somaPor'
})
export class SomaPorPipe implements PipeTransform {

  transform(parcela: number, somador: number): number {
    return parcela + somador;
  }

}
