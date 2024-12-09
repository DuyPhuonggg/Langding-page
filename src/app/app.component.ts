import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TimeHelper } from '@/app/helpers/timer.helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit, OnInit, OnDestroy {
  activeToast: boolean = false;
  remainTime: number = 0;
  intervalId: any;

  timeDisplay = {
    weeks: '00',
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  };
  @ViewChild('audioPlayer') audioPlayerRef: ElementRef | any;

  constructor(
    private timeHelper: TimeHelper,
  ) {
    this.activeToast = true;
  }

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

  ngAfterViewInit() {
    const audioPlayer = this.audioPlayerRef?.nativeElement;
    document.body.addEventListener('mousemove', () => {
      if (audioPlayer && audioPlayer.paused) {
        audioPlayer.play().then(() => {
        }).catch((err: any) => {
          console.log('Error playing audio:', err);
        });
      }
    });
  }

  onDismissToast(toast: boolean) {
    this.activeToast = toast;
  }

  updateCountdownDisplay() {
    const { weeks, days, hours, minutes, seconds } = this.timeHelper.countDown(this.remainTime);

    this.timeDisplay = {
      weeks: weeks.toString(),
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
