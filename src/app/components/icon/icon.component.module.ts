import {NgModule} from '@angular/core';
import {IconComponent} from './icon.component';
import {BrowserModule} from '@angular/platform-browser';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
  ],
  exports: [
    IconComponent
  ]
})
export class IconComponentModule { }
