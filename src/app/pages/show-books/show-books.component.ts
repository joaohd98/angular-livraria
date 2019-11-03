import {Component, OnInit} from '@angular/core';
import {ListBooksService} from '../../services/list-books/list-books.service';
import {MasterPage} from '../../helpers/master/master-page';
import {BookResponseModel} from '../../models/book/book-response-model';
import {showBooksComponentConst} from './providers/show-books.component.constants';
import {ShowBooksComponentInteractor} from './providers/show-books.component.interactor';
import { Router } from '@angular/router';
import Swal from "sweetalert2";
import {DeleteBookService} from '../../services/delete-book/delete-book.service';

@Component({
  selector: 'app-show-books',
  templateUrl: './show-books.component.html',
  styleUrls: ['./show-books.component.scss']
})
export class ShowBooksComponent extends MasterPage implements OnInit {

  interactor: ShowBooksComponentInteractor;
  searchText: string;
  page: number;
  hasNext: boolean;
  hasNextButton: boolean;
  books: BookResponseModel[];

  constants = showBooksComponentConst.page;

  constructor(
    public listBookService: ListBooksService,
    public deleteBookService: DeleteBookService,
    public router: Router) {
    super();

    this.interactor = new ShowBooksComponentInteractor(this);

    this.interactor.setDefaultPageValue();

    const { state } = this.router.getCurrentNavigation().extras;

    if (state) {

      if (state.add)
        Swal.fire(this.constants.alertTitle, this.constants.alertMessageAddSuccess, 'success');

      if (state.edit)
        Swal.fire(this.constants.alertTitle, this.constants.alertMessageEditSuccess, 'success');

    }

  }

  ngOnInit() {




    this.interactor.getBooks();



  }


}
