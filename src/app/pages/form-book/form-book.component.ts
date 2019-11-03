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

@Component({
  selector: 'app-form-book',
  templateUrl: './form-book.component.html',
  styleUrls: ['./form-book.component.scss']
})
export class FormBookComponent implements OnInit {

  title: string;
  btnText: string;

  interactor: FormBookComponentInteractor;
  formGroup: FormGroup;
  formGroupMessage: FormGroupMessage[];

  constants = formBookComponentConstants.page;

  constructor(
    public addBookService: AddBookService,
    public getBookService: GetBookService,
    public router: Router,
    public activatedRoute: ActivatedRoute,
    public location: Location) {

    this.interactor =  new FormBookComponentInteractor(this);

    this.formGroup = this.interactor.getFormGroup();
    this.formGroupMessage = this.interactor.getFormMessageGroup();

  }

  ngOnInit() {

    const id = this.activatedRoute.snapshot.params.id;

    if (id) {

      this.title = this.constants.titleEdit;
      this.btnText = this.constants.btnEdit;

      this.interactor.getBook(id);

    }

    else {

      this.title = this.constants.titleAdd;
      this.btnText = this.constants.btnAdd;

    }

  }


  submitForm(value: BookResponseModel) {

    this.interactor.addBook(value);

  }


}
