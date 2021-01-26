import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stravaData',
})
export class StravaDataPipe implements PipeTransform {
  transform(val: String, ...args: any[]): String {
    if (!args || args.length === 0) return val;
    switch (args[0]) {
      case 'time':
        if (!isNaN(Number(val))) {
          return Number(val).toFixed(2).replace('.', ':');
        }
        return val;
      default:
        return val;
    }
  }
}
