import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'onworking'
})
export class OnworkingPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
