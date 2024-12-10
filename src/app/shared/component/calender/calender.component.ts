import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent {
  @ViewChild('daysTag') daysTagRef: ElementRef | any;
  @ViewChild('currentDate') currentDateRef: ElementRef | any;
  @ViewChild('prevNextIcon') prevNextIconRef: ElementRef | any;

  date : Date;
  currYear : Date | number | string;
  currMonth : Date | number | string;
  months : Array<string> = ["January", "February", "March", "April", "May", "June", "July",
    "August", "September", "October", "November", "December"];

  constructor() {
      this.date = new Date();
      this.currYear = this.date.getFullYear();
      this.currMonth = this.date.getMonth();
  }

//    renderCalendar() {
//     let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(),
//       lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(),
//       lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(),
//       lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate();
//     let liTag = "";
//
//     for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
//       liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
//     }
//
//     for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
//       // adding active class to li if the current day, month, and year matched
//       let isToday = i === date.getDate() && currMonth === new Date().getMonth()
//       && currYear === new Date().getFullYear() ? "active" : "";
//       liTag += `<li class="${isToday}">${i}</li>`;
//     }
//
//     for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
//       liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
//     }
//     currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
//     daysTag.innerHTML = liTag;
//   }
//
//   renderCalendar();
//
//   prevNextIcon.forEach(icon => { // getting prev and next icons
//   icon.addEventListener("click", () => { // adding click event on both icons
//   // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
//   currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
//
//   if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
//   // creating a new date of current year & month and pass it as date value
//   date = new Date(currYear, currMonth, new Date().getDate());
//   currYear = date.getFullYear(); // updating current year with new date year
//   currMonth = date.getMonth(); // updating current month with new date month
// } else {
//   date = new Date(); // pass the current date as date value
// }
// renderCalendar(); // calling renderCalendar function
// });
// });
}
