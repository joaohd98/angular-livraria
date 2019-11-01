import {Component, OnInit} from '@angular/core';
import {ListBooksService} from '../../services/list-books/list-books.service';
import {MasterPage} from '../../helpers/master/master-page';
import {ServiceStatus} from '../../services';
import {BookResponseModel} from '../../models/book/book-response-model';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.scss']
})
export class ShowBooksComponent extends MasterPage implements OnInit {

  books: BookResponseModel[];

  constructor(public listBookService: ListBooksService) {
    super();
  }

  ngOnInit() {

    this.status = ServiceStatus.isLoading;

    this.listBookService.callRequest().then(response => {

      this.status = ServiceStatus.success;
      this.books = response.data;

    }, () => {

      this.status = ServiceStatus.hasIssue;

    });

  }



}
