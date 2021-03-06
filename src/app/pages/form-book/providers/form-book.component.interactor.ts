import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBookComponent} from '../form-book.component';
import {FormGroupMessage} from '../../../validators/form-group-message';
import {formBookComponentConstants} from './form-book.component.constants';
import {BookResponseModel} from '../../../models/book/book-response-model';
import Swal from 'sweetalert2';
import {ServiceStatus} from '../../../services';

export class FormBookComponentInteractor {

  private readonly component: FormBookComponent;

  constructor(component: FormBookComponent) {
    this.component = component;
  }

  getFormGroup(): FormGroup {

    const formBuilder = new FormBuilder();

    return formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      author: new FormControl('', Validators.compose([
        Validators.required,
      ])),
      price: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^(\\$?(:?\\d+,?)+(:?.?\\d+)?)$')
      ])),
    });

  }

  getFormMessageGroup(): FormGroupMessage[] {

    const {inputName, inputAuthor, inputPrice} = formBookComponentConstants;

    return [
      {
        name: inputName.name,
        content: [
          { type: inputName.requiredType, message: inputName.requiredMessage },
        ]
      },
      {
        name: inputAuthor.name,
        content: [
          { type: inputAuthor.requiredType, message: inputAuthor.requiredMessage },
        ]
      },
      {
        name: inputPrice.name,
        content: [
          { type: inputPrice.requiredType, message: inputPrice.requiredMessage },
          { type: inputPrice.patternType, message: inputPrice.patternMessage },
        ]
      },
    ];

  }

  addBook(request: BookResponseModel) {

    Swal.fire({
      title: this.component.constants.alertTitleLoading,
      allowOutsideClick: false,
      onBeforeOpen: () => {

        Swal.showLoading();

        this.component.addBookService.callRequest(request).then(() => {

          Swal.close();

          this.component.router.navigateByUrl('/', { state: { add: true } });

        }, () => {

          Swal.close();
          Swal.fire(this.component.constants.alertTitle, this.component.constants.errorAdd, 'error' );

        });

      }
    });


  }

  getBook(id: string) {

    this.component.status = ServiceStatus.isLoading;

    this.component.getBookService.callRequest(id).then(response => {

      this.component.formGroup.setValue({
        name: response.name,
        author: response.author,
        price: response.price
      });

      this.component.status = ServiceStatus.success;

    }, () => {

      this.component.status = ServiceStatus.hasIssue;

    });

  }

  editBook(id: string, request: BookResponseModel) {

    Swal.fire({
      title: this.component.constants.alertTitleLoading,
      allowOutsideClick: false,
      onBeforeOpen: () => {

        Swal.showLoading();

        this.component.editBookService.callRequest(id, request).then(() => {

          Swal.close();

          this.component.router.navigateByUrl('/', { state: { edit: true } });

        }, () => {

          Swal.close();
          Swal.fire(this.component.constants.alertTitle, this.component.constants.errorEdit, 'error' );

        });

      }
    });

  }

}
