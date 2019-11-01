import {Component, Input} from '@angular/core';
import {ServiceStatus} from '../../../../services';
import {MasterComponent} from '../../../../helpers/master/master-component';

@Component({
  selector: 'app-show-books-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent extends MasterComponent {

  @Input() status: ServiceStatus;

  constructor() {
    super();
  }

  showSearchBar(): boolean {

    return this.status === ServiceStatus.success;

  }

}
