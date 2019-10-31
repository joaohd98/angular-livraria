import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './routes/app.routing.module';
import {ShowBooksComponentModule} from './pages/show-books/show-books.component.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    /* PAGES */
    ShowBooksComponentModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
