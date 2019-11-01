import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {SpinnerComponent} from './spinner.component';

@NgModule({
  declarations: [
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    SpinnerComponent
  ]
})
export class SpinnerComponentModule { }
