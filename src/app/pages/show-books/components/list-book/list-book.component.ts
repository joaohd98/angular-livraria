import {Component, Input} from '@angular/core';
import {MasterComponent} from '../../../../helpers/master/master-component';
import {BookResponseModel} from '../../../../models/book/book-response-model';
import {showBooksComponentConst} from '../../providers/show-books.component.constants';
import {ShowBooksComponentInteractor} from '../../providers/show-books.component.interactor';
import {ServiceStatus} from '../../../../services';

@Component({
  selector: 'app-show-books-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss', './list-book.component.skeleton.scss']
})
export class ListBookComponent extends MasterComponent {

  @Input() searchText: string;
  @Input() books: BookResponseModel[];
  @Input() interactor: ShowBooksComponentInteractor[];

  constants = showBooksComponentConst.listBook;

  isFilter(): boolean {

    return this.status === ServiceStatus.success && this.books.length === 0 && this.searchText !== '';

  }

  isEmpty(): boolean {

    return this.status === ServiceStatus.success && this.books.length === 0 && this.searchText === '';

  }

  isIssue(): boolean {

    return this.status === ServiceStatus.hasIssue;

  }

  isSuccess(): boolean {

    return this.status === ServiceStatus.success && this.books.length > 0;

  }

  isLoading(): boolean {

    return this.status === ServiceStatus.isLoading;

  }


}
