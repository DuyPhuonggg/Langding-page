import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastComponent } from './common/toast/toast.component';
import { CalenderComponent } from '@/app/shared/component/calender/calender.component';


@NgModule({
  declarations: [
    ToastComponent,
    CalenderComponent
  ],
  exports: [
    ToastComponent,
    CalenderComponent
  ],
  imports: [CommonModule],
})
export class SharedModule {}
