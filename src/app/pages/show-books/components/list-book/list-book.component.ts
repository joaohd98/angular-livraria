import {Component, Input, OnInit} from '@angular/core';
import {MasterComponent} from '../../../../helpers/master/master-component';
import {BookResponseModel} from '../../../../models/book/book-response-model';
import {showBooksComponentConst} from '../../providers/show-books.component.constants';

@Component({
  selector: 'app-show-books-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss', './list-book.component.skeleton.scss']
})
export class ListBookComponent extends MasterComponent implements OnInit {

  constants = showBooksComponentConst.listBook;

  @Input() books: BookResponseModel[];

  ngOnInit() {


  }

  getBookItem(book: BookResponseModel) {


  }

}
