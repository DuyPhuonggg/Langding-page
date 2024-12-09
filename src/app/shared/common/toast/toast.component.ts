import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PositionToast, ToneToast } from '@/app/types/shared/common/toast/toast.type';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.css']
})
export class ToastComponent {
  private _position: PositionToast = 'Bottom-center';
  private _tone: ToneToast = 'Normal';
  private _active: boolean = false;
  private _title: string = '';

  @Input()
  get title(): string {
     return this._title;
  }
  set title(value: string) {
      this._title = value;
  }

  @Input()
  get position(): PositionToast {
    return this._position;
  }
  set position(value: PositionToast) {
     this._position = value;
  };

  @Input()
  get tone(): ToneToast {
    return this._tone;
  }
  set tone(value: ToneToast) {
    this._tone = value;
  }

  @Input()
  get active(): boolean {
      return this._active;
  }
  set active(value: boolean) {
      this._active = value;
      this.activeChange.emit(value);
  }

  @Output() onDismiss: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() activeChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  handleDismiss(): void {
    this.onDismiss.emit(!this.active);
    this.activeChange.emit(!this.active);
  }
}
