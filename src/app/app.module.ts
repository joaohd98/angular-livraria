import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './routes/app.routing.module';
import {ShowBooksComponentModule} from './pages/show-books/show-books.component.module';
import {HttpClientModule} from '@angular/common/http';
import {FormBookComponentModule} from './pages/form-book/form-book.component.module';
import { InputComponent } from './components/input/input.component';
import {ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    /* PAGES */
    ShowBooksComponentModule,
    FormBookComponentModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
