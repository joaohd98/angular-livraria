import {NgModule} from '@angular/core';
import {ShowBooksComponent} from './show-books.component';
import {BrowserModule} from '@angular/platform-browser';
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import {ListBookComponent} from './components/list-book/list-book.component';
import {FooterLoadingComponent} from './components/footer-loading/footer-loading.component';
import {NgbCollapseModule, NgbDropdownModule} from '@ng-bootstrap/ng-bootstrap';
import {IconComponentModule} from '../../components/icon/icon.component.module';
import {SpinnerComponentModule} from '../../components/spinner/spinner.component.module';
import {FormatMoneyPipeModule} from '../../pipes/format-money/format-money.pipe.module';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    ShowBooksComponent,
    SearchBarComponent,
    ListBookComponent,
    FooterLoadingComponent,
  ],
  imports: [
    BrowserModule,
    NgbDropdownModule,
    NgbCollapseModule,
    IconComponentModule,
    SpinnerComponentModule,
    FormatMoneyPipeModule,
    FormsModule,
    RouterModule
  ],
})
export class ShowBooksComponentModule { }
