import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchf'
})
export class SearchfPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
