import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './input.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  exports: [
    InputComponent
  ]
})
export class InputComponentModule { }
