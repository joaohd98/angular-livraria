import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormGroupMessage} from '../../validators/form-group-message';
import {FormBookComponentInteractor} from './providers/form-book.component.interactor';
import {BookResponseModel} from '../../models/book/book-response-model';
import {AddBookService} from '../../services/add-book/add-book.service';
import {formBookComponentConstants} from './providers/form-book.component.constants';
import {ActivatedRoute, Router} from '@angular/router';
import {GetBookService} from '../../services/get-book/get-book.service';
import { Location } from '@angular/common';
import {EditBookService} from '../../services/edit-book/edit-book.service';
import {ServiceStatus} from '../../services';

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.scss']
})
export class FormBookComponent implements OnInit {

  id: string;
  title: string;
  btnText: string;

  interactor: FormBookComponentInteractor;
  formGroup: FormGroup;
  formGroupMessage: FormGroupMessage[];

  constants = formBookComponentConstants.page;
  status = ServiceStatus.noAction;
  serviceStatus = ServiceStatus;

  constructor(
    public addBookService: AddBookService,
    public getBookService: GetBookService,
    public editBookService: EditBookService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public location: Location) {

    this.interactor =  new FormBookComponentInteractor(this);

    this.formGroup = this.interactor.getFormGroup();
    this.formGroupMessage = this.interactor.getFormMessageGroup();

  }

  ngOnInit() {

    this.id = this.activatedRoute.snapshot.params.id;

    if (this.id) {

      this.title = this.constants.titleEdit;
      this.btnText = this.constants.btnEdit;

      this.interactor.getBook(this.id);

    }

    else {

      this.title = this.constants.titleAdd;
      this.btnText = this.constants.btnAdd;

    }

  }


  submitForm(value: BookResponseModel) {

    if (this.id)
      this.interactor.editBook(this.id, value);

    else
      this.interactor.addBook(value);

  }


}
