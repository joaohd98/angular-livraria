import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormGroupMessage} from '../../../../validators/form-group-message';
import {formBookComponentConstants} from '../../providers/form-book.component.constants';

@Component({
  selector: 'app-input-name',
  templateUrl: './input-name.component.html',
  styleUrls: ['./input-name.component.scss']
})
export class InputNameComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() formGroupMessage: FormGroupMessage[];

  constants = formBookComponentConstants.inputName;

  constructor() { }

  ngOnInit() {
  }

}
