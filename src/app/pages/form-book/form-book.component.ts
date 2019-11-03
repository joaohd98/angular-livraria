import { Component } from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormGroupMessage} from '../../validators/form-group-message';
import {FormBookComponentInteractor} from './providers/form-book.component.interactor';
import {BookResponseModel} from '../../models/book/book-response-model';
import {AddBookService} from '../../services/add-book/add-book.service';
import {formBookComponentConstants} from './providers/form-book.component.constants';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.scss']
})
export class FormBookComponent {

  interactor: FormBookComponentInteractor;
  formGroup: FormGroup;
  formGroupMessage: FormGroupMessage[];

  constants = formBookComponentConstants.page;

  constructor(public addBookService: AddBookService) {

    this.interactor =  new FormBookComponentInteractor(this);

    this.formGroup = this.interactor.getFormGroup();
    this.formGroupMessage = this.interactor.getFormMessageGroup();

  }

  submitForm(value: BookResponseModel) {

    this.interactor.addBook(value);

  }

}
