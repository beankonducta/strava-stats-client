import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stravaData',
})
export class StravaDataPipe implements PipeTransform {
  transform(val: String, ...args: any[]): String {
    if (!args || args.length === 0) return val;
    switch (args[0]) {
      case 'avg':
        if (!isNaN(Number(val))) {
          return Number(val).toFixed(2).replace('.', ':');
        }
        return val;
      case 'time':
        if (!isNaN(Number(val))) {
          const time = (Number(val));
          const hr = Math.round(time / 3600);
          const min = Math.round((time / 60) % 60);
          const sec = Math.round(time % 60);
          return `${hr}:${min}:${sec}`
        }
        return val;
      case 'miles':
        if (!isNaN(Number(val))) {
          return (Number(val) / 1609.344).toFixed(2);
        }
        return val;
      case 'count':
        return val;
      default:
        return val;
    }
  }
}
