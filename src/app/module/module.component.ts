import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-module',
  templateUrl: './module.component.html',
  styleUrls: ['./module.component.css'],
})
export class ModuleComponent {
  constructor(private common: CommonService) {}
  public counter = 0;
  public squared = 0;
  ngOnInit(): void {
    this.counter = this.common.counter;
    this.squared = this.common.squared(this.counter);
    this.common.counter++;
  }
}
