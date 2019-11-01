import {Component, Input, OnInit} from '@angular/core';
import {MasterComponent} from '../../../../helpers/master/master-component';
import {BookResponseModel} from '../../../../models/book/book-response-model';
import {ServiceStatus} from '../../../../services';
import {faEdit, faMinusSquare, faPlusSquare, faTrash, IconDefinition} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-show-books-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {

  @Input() books: BookResponseModel[];
  @Input() status: ServiceStatus;

  iconPlus: IconDefinition;
  iconMinus: IconDefinition;
  iconEdit: IconDefinition;
  iconDelete: IconDefinition;

  ngOnInit() {

    this.iconPlus = faPlusSquare;
    this.iconMinus = faMinusSquare;
    this.iconDelete = faTrash;
    this.iconEdit = faEdit;

  }

  getBookItem(book: BookResponseModel) {


  }

}
