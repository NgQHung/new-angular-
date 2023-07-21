import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public counter = 1;
  constructor() {}

  public squared(n: number): number {
    console.log('work');
    return n * n;
  }
}
