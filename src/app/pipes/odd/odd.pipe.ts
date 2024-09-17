import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'odd',
  standalone: true
})
export class OddPipe implements PipeTransform {

  transform(value: number[], ...args: unknown[]): unknown {
    return value.filter((n) => n % 2);
  }

}
