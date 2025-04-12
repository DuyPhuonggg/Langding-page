import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { ToastComponent } from './common/toast/toast.component';
import { CalenderComponent } from '@/app/shared/component/calender/calender.component';
import { CongratulateComponent } from './component/congratulate/congratulate.component';
import { CardComponent } from './common/card/card.component';
import { PageComponent } from './common/page/page.component';
import { CountDownComponent } from './component/count-down/count-down.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ToastComponent,
    CalenderComponent,
    CongratulateComponent,
    CardComponent,
    PageComponent,
    CountDownComponent
  ],
  exports: [
    ToastComponent,
    CalenderComponent,
    CongratulateComponent,
    PageComponent,
    CountDownComponent,
  ],
  imports: [CommonModule, NgOptimizedImage, ReactiveFormsModule],
})
export class SharedModule {}
