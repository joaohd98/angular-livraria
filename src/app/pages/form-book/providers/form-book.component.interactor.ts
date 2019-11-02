import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {FormBookComponent} from '../form-book.component';
import {FormGroupMessage} from '../../../validators/form-group-message';
import {formBookComponentConstants} from './form-book.component.constants';

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
        Validators.pattern('^[0-9]{1,2}([,.][0-9]{1,2})?$')
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

}
