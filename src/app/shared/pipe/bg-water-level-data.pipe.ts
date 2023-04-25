import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bgDataWaterLevel'
})
export class BgWaterLevelDataPipe implements PipeTransform {
  transform(value: string): string {
    let parseValue = +value;
    let color = 'gray';
    if (parseValue <= 0) {
      return color;
    } else if (parseValue > 0 && parseValue < 20) {
      color = 'green';
      return color;
    } else if (parseValue >= 20 && parseValue < 50) {
      color = 'yellow';
      return color;
    } else if (parseValue >= 50 && parseValue < 100) {
      color = 'orange';
      return color;
    } else if (parseValue >= 100 && parseValue < 150) {
      color = 'red';
      return color;
    } else if (parseValue >= 150) {
      color = 'purple';
      return color;
    } else {
      return color;
    }
  }
}
