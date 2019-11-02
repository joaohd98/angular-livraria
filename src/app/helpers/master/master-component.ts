import {Helpers} from '../index';
import {MasterConstants} from './master-constants';
import {ServiceStatus} from '../../services';
import {Input} from '@angular/core';

export class MasterComponent {

  @Input() status: ServiceStatus = ServiceStatus.noAction;
  helpers = Helpers;
  constants: MasterConstants;

}
