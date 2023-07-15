import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onWorking',
})
export class OnWorkingPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      return 'is working';
    }
    return '';
  }
}
