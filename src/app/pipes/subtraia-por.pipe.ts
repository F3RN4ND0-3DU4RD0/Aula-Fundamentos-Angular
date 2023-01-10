import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'subtraiaPor'
})
export class SubtraiaPorPipe implements PipeTransform {

  transform(minuendo: number, subtraendo: number): number {
    return (minuendo - subtraendo);
  }

}
