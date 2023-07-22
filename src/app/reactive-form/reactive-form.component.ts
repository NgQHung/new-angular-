import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { CommonService } from '../Services/common.service';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css'],
})
export class ReactiveFormComponent {
  public errorColor = 'red';

  // using form group
  // public formGroup: FormGroup = new FormGroup({
  //   name: new FormControl(''),
  //   age: new FormControl(0),
  // });

  // using form builder
  public formGroup = this.formBuilder.group({
    name: ['', Validators.required],
    age: [0, Validators.required],
  });
  constructor(
    private common: CommonService,
    private formBuilder: FormBuilder
  ) {}

  public onSubmit(): void {
    this.common.onSubmit(this.formGroup.value);
    console.log('form group:', this.formGroup);
  }
}
