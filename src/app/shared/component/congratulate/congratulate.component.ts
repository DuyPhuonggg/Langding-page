import { Component } from '@angular/core';

@Component({
  selector: 'app-congratulate',
  templateUrl: './congratulate.component.html',
  styleUrls: ['./congratulate.component.css']
})
export class CongratulateComponent {
  listCongratulate = [{
    id: 1,
    auth: 'Kiều Duy Phương',
    content: 'Chúc mày năm mới vui như Tết, tiền đầy túi, tình đầy tim, thành công rực rỡ và mọi điều tốt lành!'
  },{
    id: 2,
    auth: 'Kiều Duy Phương',
    content: 'Chúc bạn một năm mới rực rỡ, luôn khỏe mạnh, hạnh phúc và đạt được tất cả những gì bạn mong muốn!'
  },{
    id: 3,
    auth: 'Kiều Duy Phương',
    content: 'Xuân sang chúc bạn vàng thỏi đầy nhà, tiền rải khắp sân, tình yêu mặn nồng và mọi điều viên mãn!'
  },{
    id: 4,
    auth: 'Kiều Duy Phương',
    content: 'Chúc bạn năm mới nhiều sức khỏe, sự nghiệp thăng tiến, gặt hái nhiều thành công và luôn hạnh phúc!'
  }];
}
