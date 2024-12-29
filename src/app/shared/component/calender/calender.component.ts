import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css'],
})
export class CalenderComponent {
  @ViewChild('daysTag') daysTagRef: ElementRef | any;
  @ViewChild('currentDate') currentDateRef: ElementRef | any;
  @ViewChild('prevNextIcon') prevNextIconRef: ElementRef | any;

  currentDate: Date;
  date: Date;
  currentYear: number;
  currentMonth: number;
  days: Array<{key: string, value: number}>;
  isExpand: boolean;

  months: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  specialDays = [
    '28-0-2025',
    '29-0-2025',
    '30-0-2025',
    '31-0-2025',
    '25-11-2024',
  ]

  constructor() {
    this.currentDate = new Date();
    this.date = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
    this.days = this.getDaysOfCurrentMonth();
    this.isExpand = false;
  }

  getDaysOfCurrentMonth() {
    const days = [];
    const firstDayOfCurrentMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const lastDayOfCurrentMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
    const lastDateOfPreviousMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();

    // fill first week
    for (let i = 0; i < 7; i ++) {
      if (firstDayOfCurrentMonth === i)  {
        for (let j = i; j > 0; j--) {
          days.push({key: 'pre', value: lastDateOfPreviousMonth - j + 1})
        }

        const lengthFirstRow = days.length;
        for (let k = 0; k < ( 7 - lengthFirstRow); k++) {
          days.push({key: 'cur', value: k + 1})
        }
      }
    }

    // fill 3 times full week
    const firstDayOfSecondWeek = days[days.length - 1].value + 1;
    for (let i = 0 ; i < 21; i++) {
      days.push({key: 'cur', value: i + firstDayOfSecondWeek})
    }

    // fill 5th week
    let remainDays = lastDayOfCurrentMonth - days[days.length - 1].value;
    const firstDayOfFifthWeek = days[days.length - 1].value + 1
    if (remainDays > 7) {
      for (let i = 0 ; i < 7; i++) {
        days.push( {key: 'cur', value: i + firstDayOfFifthWeek})
      }

      remainDays = remainDays - 7;
    } else {
      for (let i = 0; i < remainDays; i ++) {
        days.push({key: 'cur', value: i + firstDayOfFifthWeek});
      }

      for (let i = 0 ; i < (7 - remainDays); i ++) {
        days.push( {key: 'next', value: i + 1});
      }

      remainDays = 0;
    }

    // fill 6th week
    console.log(remainDays)
    let firstDayOfSixthWeek = days[days.length - 1].value + 1;
    if (remainDays > 0) {

      for ( let i= 0; i< remainDays; i ++) {
        days.push( {key: 'cur', value: i + firstDayOfSixthWeek});
      }

      for (let i= 0; i < (7 - remainDays); i ++) {
        days.push( {key: 'next', value: i + 1});
      }
    }

    if (remainDays === 0) {
      if (firstDayOfSixthWeek > 31) firstDayOfSixthWeek = 1
      for (let i = 0 ; i < 7 ; i ++) {
        days.push( {key: 'next', value: i + firstDayOfSixthWeek});
      }
    }

    if (!days.length) return [];
    return days;
  }

  handleChangeMonth(mode: string, currentMonth: number) {
      if (mode === 'previous') {
          this.currentMonth = currentMonth - 1;


          // previous year
          if (this.currentMonth === -1) {
            this.currentYear = this.currentYear - 1;
            this.currentMonth = 11;
          }

         this.days = this.getDaysOfCurrentMonth();
      }

      if (mode === 'next') {
        this.currentMonth = currentMonth + 1;


        // next year
        if (this.currentMonth > 11) {
          this.currentYear = this.currentYear + 1;
          this.currentMonth = 0;
        }

        this.days = this.getDaysOfCurrentMonth();
      }
  }

  handleDismiss() {

  }
}
