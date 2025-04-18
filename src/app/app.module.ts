import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgOptimizedImage } from '@angular/common';
import { SharedModule } from './shared/shared.module';
import { TimeHelper } from '@/app/helpers/timer.helper';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgOptimizedImage,
    SharedModule,
    HttpClientModule,
  ],
  providers: [TimeHelper],
  bootstrap: [AppComponent]
})
export class AppModule { }
