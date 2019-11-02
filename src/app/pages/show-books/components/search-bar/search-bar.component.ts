import {Component, Input} from '@angular/core';
import {ServiceStatus} from '../../../../services';
import {MasterComponent} from '../../../../helpers/master/master-component';
import {showBooksComponentConst} from '../../providers/show-books.component.constants';

@Component({
  selector: 'app-show-books-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent extends MasterComponent {

  constants = showBooksComponentConst.searchBar;

  showSearchBar(): boolean {

    return this.status === ServiceStatus.success;

  }

}
