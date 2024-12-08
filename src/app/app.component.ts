import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
    activeToast : boolean = false;
    @ViewChild('audioPlayer') audioPlayerRef: ElementRef | any;

    constructor() {
        this.activeToast = true;
    }


  ngAfterViewInit() {
        const audioPlayer = this.audioPlayerRef?.nativeElement;

        document.body.addEventListener('mousemove', () => {
            if (audioPlayer && audioPlayer.paused) {
                audioPlayer.play().then(() => {}).catch((err: any) => {
                    console.log('Error playing audio:', err);
                });
            }
        });
    }

  onDismissToast(toast: boolean) {
    console.log('Parent received onDismiss:', toast);
    this.activeToast = toast;
  }
}
