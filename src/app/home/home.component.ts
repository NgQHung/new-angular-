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

  public vietnamData = [
    { city: 'Chọn thành phố', district: ['Quận Huyện'] },
    {
      city: 'An Giang',
      district: [
        'Thành phố Long Xuyên',
        'Thành phố Châu Đốc',
        'Thị xã Tân Châu',
        'Huyện An Phú',
        'Huyện Châu Phú',
        'Huyện Châu Thành',
        'Huyện Chợ Mới',
        'Huyện Phú Tân',
        'Huyện Thoại Sơn',
        'Huyện Tịnh Biên',
        'Huyện Tri Tôn',
      ],
    },
    {
      city: 'Bà Rịa - Vũng Tàu',
      district: [
        'Thành phố Vũng Tàu',
        'Thị xã Bà Rịa',
        'Thị xã Phú Mỹ',
        'Huyện Châu Đức',
        'Huyện Côn Đảo',
        'Huyện Đất Đỏ',
        'Huyện Long Điền',
        'Huyện Tân Thành',
        'Huyện Xuyên Mộc',
      ],
    },
    {
      city: 'Bạc Liêu',
      district: [
        'Thành phố Bạc Liêu',
        'Huyện Đông Hải',
        'Huyện Giá Rai',
        'Huyện Hòa Bình',
        'Huyện Hồng Dân',
        'Huyện Phước Long',
        'Huyện Vĩnh Lợi',
      ],
    },
    {
      city: 'Bắc Kạn',
      district: [
        'Thị xã Bắc Kạn',
        'Huyện Ba Bể',
        'Huyện Bạch Thông',
        'Huyện Chợ Đồn',
        'Huyện Chợ Mới',
        'Huyện Na Rì',
        'Huyện Ngân Sơn',
        'Huyện Pác Nặm',
      ],
    },
  ];
  public resetHandler(): void {
    this.name = '';
    this.surname = '';
    this.age = 0;
  }
  public filteredData: string[] = [''];

  public selectedData(event: any): void {
    const city: string = event.target.value;
    if (!city) return;
    this.filteredData =
      this.vietnamData.find((data) => data.city === city)?.district || [];
  }

  public onInit(): void {}
}
