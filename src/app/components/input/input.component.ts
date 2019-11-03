import {Component, Input, OnInit} from '@angular/core';
import {AbstractControl, FormGroup} from '@angular/forms';
import {FormGroupMessage} from '../../validators/form-group-message';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})

export class InputComponent implements OnInit {

  @Input() formGroup: FormGroup;
  abstractControl: AbstractControl;

  @Input() formGroupMessages: FormGroupMessage[] = [];
  formMessage: FormGroupMessage;

  @Input() name: string;
  @Input() label: string;
  @Input() type = 'text';
  @Input() placeholder: string;
  @Input() hasMoneyMask: boolean;

  ngOnInit(){

    this.abstractControl = this.formGroup.get(this.name);
    this.formMessage = this.formGroupMessages.find(message => this.name === message.name);

  }


  verificarCampoCorreto(): string {

    const abstractControl = this.abstractControl;


    if (abstractControl.valid && abstractControl.value)
      return 'has-success';

    else if (abstractControl.invalid && (abstractControl.touched || abstractControl.value)) {

      if (abstractControl['focus'])
        return 'has-warning';

      else
        return 'has-error';

    }

    else
      return '';

  }


  focus(tipo) {

    this.abstractControl['focus'] = tipo;

  }

}
