import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormatMoneyPipe} from './format-money.pipe';

@NgModule({
  declarations: [
   FormatMoneyPipe
  ],
  imports: [
    BrowserModule,
  ],
  exports: [
    FormatMoneyPipe
  ]

})
export class FormatMoneyPipeModule { }
