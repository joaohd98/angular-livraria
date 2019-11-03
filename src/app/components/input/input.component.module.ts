import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputComponent} from './input.component';
import {CommonModule} from '@angular/common';
import {NgxCurrencyModule} from 'ngx-currency';

export const customCurrencyMaskConfig = {
  align: 'left',
  allowNegative: false,
  allowZero: false,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
  nullable: false
};

@NgModule({
  declarations: [
    InputComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    NgxCurrencyModule.forRoot(customCurrencyMaskConfig)
  ],
  exports: [
    InputComponent
  ]
})
export class InputComponentModule { }
