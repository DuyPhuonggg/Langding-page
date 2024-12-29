import { Component, OnDestroy, OnInit } from '@angular/core';
import { TimeHelper } from '@/app/helpers/timer.helper';

@Component({
  selector: 'app-count-down',
  templateUrl: './count-down.component.html',
  styleUrls: ['./count-down.component.css']
})
export class CountDownComponent implements OnInit, OnDestroy {
  remainTime: number = 0;
  intervalId: any;

  timeDisplay = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  };

  constructor(
    private timeHelper: TimeHelper,
  ) {}

  ngOnInit() {
    const today = new Date().getTime();
    const lunarHoliday = new Date('2025-01-29').getTime();

    this.remainTime = lunarHoliday - today;

    this.intervalId = setInterval(() => {
      if (this.remainTime > 0) {
        this.remainTime -= 1000;
        this.updateCountdownDisplay();
      } else {
        clearInterval(this.intervalId); // Stop the interval when time reaches 0
        console.log('Countdown complete!');
      }
    }, 1000);

    this.updateCountdownDisplay();
  }

  updateCountdownDisplay() {
    const { days, hours, minutes, seconds } = this.timeHelper.countDown(this.remainTime);

    this.timeDisplay = {
      days: days.toString(),
      hours: hours.toString(),
      minutes: minutes.toString(),
      seconds: seconds.toString(),
    };
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Cleanup interval
    }
  }
}
