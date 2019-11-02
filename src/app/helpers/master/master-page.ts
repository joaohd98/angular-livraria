import {ServiceStatus} from '../../services';
import {MasterConstants} from './master-constants';

export class MasterPage {

  constants: MasterConstants;
  status: ServiceStatus = ServiceStatus.noAction;

}
