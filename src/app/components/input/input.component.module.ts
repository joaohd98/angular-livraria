import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './input.component';
import {CommonModule} from '@angular/common';
import {IConfig, NgxMaskModule} from 'ngx-mask';

const options: Partial<IConfig> | (() => Partial<IConfig>) = null;

@NgModule({
  declarations: [
    InputComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgxMaskModule.forRoot(options)
  ],
  exports: [
    InputComponent
  ]
})
export class InputComponentModule { }
