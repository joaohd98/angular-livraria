import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormGroupMessage} from '../../../../validators/form-group-message';
import {formBookComponentConstants} from '../../providers/form-book.component.constants';

@Component({
  selector: 'app-input-price',
  templateUrl: './input-price.component.html',
  styleUrls: ['./input-price.component.scss']
})
export class InputPriceComponent implements OnInit {

  @Input() formGroup: FormGroup;
  @Input() formGroupMessage: FormGroupMessage[];

  constants = formBookComponentConstants.inputPrice;

  constructor() { }

  ngOnInit() {
  }

}
