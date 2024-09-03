import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsToTime',
  standalone: true
})
export class SecondsToTimePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
