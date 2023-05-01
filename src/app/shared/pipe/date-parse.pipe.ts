import { Pipe, PipeTransform } from '@angular/core';
import { format } from 'date-fns';

@Pipe({
  name: 'dateParse',
  standalone: true
})
export class DateParsePipe implements PipeTransform {

  transform(value: any, formatDate: string): unknown {
    if (typeof value === 'string') {
      return format(new Date(value), formatDate);
    } else {
      return format(new Date(value.year, value.month, value.day), formatDate)
    }
  }

}
