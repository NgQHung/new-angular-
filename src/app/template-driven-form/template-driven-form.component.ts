import { Component } from '@angular/core';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  public name = '';

  constructor(private common: CommonService) {}

  public onSubmit(): void {
    // console.log('onSubmit name= ', this.name);
    this.common.onSubmit(this.name);
  }
}
