import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBookComponent} from '../form-book.component';
import {FormGroupMessage} from '../../../validators/form-group-message';

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
      ])),
    });

  }

  getFormMessageGroup(): FormGroupMessage[] {

    return [
      {
        name: 'name',
        content: [
          { type: 'required', message: 'CPF é obrigatório' },
        ]
      },
      {
        name: 'author',
        content: [
          { type: 'required', message: 'Data de nascimento é obrigatória.' },
        ]
      },
      {
        name: 'price',
        content: [
          { type: 'required', message: 'Data de nascimento é obrigatória.' },
        ]
      },
    ];

  }

}
