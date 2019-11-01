import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './routes/app.routing.module';
import {ShowBooksComponentModule} from './pages/show-books/show-books.component.module';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    /* PAGES */
    ShowBooksComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
