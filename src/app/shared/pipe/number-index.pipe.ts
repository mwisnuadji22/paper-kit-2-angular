import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'numberIndex',
  standalone: true
})
export class NumberIndexPipe implements PipeTransform {

  transform(page: number, pageSize: number, index: number): number {
    return ((page * pageSize) - pageSize) + (index + 1);
  }

}
