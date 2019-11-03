import {NgModule} from '@angular/core';
import {FormBookComponent} from './form-book.component';
import {BrowserModule} from '@angular/platform-browser';
import { InputNameComponent } from './components/input-name/input-name.component';
import { InputPriceComponent } from './components/input-price/input-price.component';
import { InputAuthorComponent } from './components/input-author/input-author.component';
import {InputComponentModule} from '../../components/input/input.component.module';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    FormBookComponent,
    InputNameComponent,
    InputPriceComponent,
    InputAuthorComponent,
  ],
  imports: [
    BrowserModule,
    InputComponentModule,
    ReactiveFormsModule,
  ],
})
export class FormBookComponentModule { }
