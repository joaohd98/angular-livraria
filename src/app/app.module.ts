import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ShowBooksComponent } from './pages/show-books/show-books.component';
import {RouterModule} from '@angular/router';
import {AppRoutingModule} from './routes/app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    ShowBooksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
