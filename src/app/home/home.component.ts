import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public name = 'Hung';
  public surname = 'Nguyen Quang';
  public age = 23;
  public names = ['Minh Anh', 'Hung', 'Yen Nhi', 'Manh Hung', 'anh Thai'];
  public newNames = [
    {
      name: 'Minh Anh',
      age: 19,
      good: true,
      working: false,
    },
    {
      name: 'Hung',
      age: 23,
      good: false,
      working: true,
    },
    {
      name: 'Yen Nhi',
      age: 15,
      good: false,
      working: false,
    },
    {
      name: 'Manh Hung',
      age: 12,
      good: false,
      working: false,
    },
    {
      name: 'anh Thai',
      age: 24,
      good: true,
      working: true,
    },
  ];
  public resetHandler(): void {
    this.name = '';
    this.surname = '';
    this.age = 0;
  }
  // public

  public onInit(): void {}
}
