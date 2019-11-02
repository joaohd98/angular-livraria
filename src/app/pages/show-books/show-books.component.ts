import {Component, OnInit} from '@angular/core';
import {ListBooksService} from '../../services/list-books/list-books.service';
import {MasterPage} from '../../helpers/master/master-page';
import {ServiceStatus} from '../../services';
import {BookResponseModel} from '../../models/book/book-response-model';
import {showBooksComponentConst} from './providers/show-books.component.constants';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.scss']
})
export class ShowBooksComponent extends MasterPage implements OnInit {

  searchText: string;
  page: number;
  hasNext: boolean;
  hasNextButton: boolean;
  books: BookResponseModel[];

  constants = showBooksComponentConst.page;

  constructor(public listBookService: ListBooksService) {
    super();

    this.searchText = '';
    this.page = 1;
    this.hasNext = false;
    this.hasNextButton = false;
    this.books = [];

  }

  ngOnInit() {

    this.status = ServiceStatus.isLoading;

    this.listBookService.callRequest(this.searchText, this.page, this.constants.limit).then(response => {

      this.status = ServiceStatus.success;

      this.books = response.data.books;
      this.hasNext = response.data.total > this.page * this.constants.limit;

    }, () => {

      this.status = ServiceStatus.hasIssue;

    });

  }



}
