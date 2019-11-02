import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormGroupMessage} from '../../../../validators/form-group-message';
import {formBookComponentConstants} from '../../providers/form-book.component.constants';

@Component({
  selector: 'app-input-author',
  templateUrl: './input-author.component.html',
  styleUrls: ['./input-author.component.scss']
})
export class InputAuthorComponent {

  @Input() formGroup: FormGroup;
  @Input() formGroupMessage: FormGroupMessage[];

  constants = formBookComponentConstants.inputAuthor;

}
