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
  days: Array<number>;

  months: Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  constructor() {
    this.currentDate = new Date();
    this.date = new Date();
    this.currentYear = this.currentDate.getFullYear();
    this.currentMonth = this.currentDate.getMonth();
    this.days = [];
    this.renderCalendar();
  }

  renderCalendar() {
    this.days = [];

    const firstDayOfCurrentMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
    const lastDayOfCurrentMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();

    const firstDayOfNextMonth = new Date(this.currentYear, this.currentMonth + 1, 1);
    const lastDateOfPreviousMonth = new Date(this.currentYear, this.currentMonth, 0).getDate();

    // fill first week
    for (let i = 0; i < 7; i ++) {
        if (firstDayOfCurrentMonth === i)  {
           for (let j = i; j > 0; j--) {
             this.days.push(lastDateOfPreviousMonth - j + 1)
           }

           const lengthFirstRow = this.days.length;
           for (let k = 0; k < ( 7 - lengthFirstRow); k++) {
             this.days.push(1 + k)
           }
           console.log(this.days);
        }
    }

    // fill 3 times full week
    const firstDayOfSecondWeek = this.days[this.days.length - 1] + 1;
    for (let i = 0 ; i < 21; i++) {
      this.days.push(i + firstDayOfSecondWeek)
    }

    // fill 5th week
    let remainDays = lastDayOfCurrentMonth - this.days[this.days.length - 1];
    const firstDayOfFifthWeek = this.days[this.days.length - 1] + 1
    if (remainDays > 7) {
      for (let i = 0 ; i < 7; i++) {
        this.days.push(i + firstDayOfFifthWeek)
      }

      remainDays = remainDays - 7;
    } else {

      for (let i = 0; i < remainDays; i ++) {
        this.days.push(i + firstDayOfFifthWeek);
      }

      for (let i = 0 ; i < (7 -remainDays); i ++) {
        this.days.push(i + 1);
      }

      remainDays = 0;
    }

    // fill 6th week
    const firstDayOfSixthWeek = this.days[this.days.length - 1] + 1;
    if (remainDays > 0) {

       for ( let i=0; i<remainDays; i ++) {
          this.days.push(i + firstDayOfSixthWeek);
       }
    }

    if (remainDays === 0) {
      for (let i = 0 ; i < 7 ; i ++) {
        this.days.push(i + firstDayOfSixthWeek);
      }
    }


    console.log(this.days)
    console.log({
      firstDayOfCurrentMonth,
      lastDayOfCurrentMonth,
      firstDayOfNextMonth,
      lastDateOfPreviousMonth,
    })
  }

  // renderCalendar(); // calling renderCalendar function
  // });
  // });

  renderRows() {

  }

  handleChangeMonth(mode: string, currentMonth: number) {
      if (mode === 'previous') {
          this.currentMonth = currentMonth - 1;


          // previous year
          if (this.currentMonth === -1) {
            this.currentYear = this.currentYear - 1;
            this.currentMonth = 11;
          }

          this.renderCalendar();
      }

      if (mode === 'next') {
        this.currentMonth = currentMonth + 1;


        // next year
        if (this.currentMonth > 11) {
          this.currentYear = this.currentYear + 1;
          this.currentMonth = 0;
        }

        this.renderCalendar();
      }
  }
}
