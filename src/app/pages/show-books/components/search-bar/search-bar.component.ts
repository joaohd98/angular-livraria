import {Component, Input} from '@angular/core';
import {ServiceStatus} from '../../../../services';
import {MasterComponent} from '../../../../helpers/master/master-component';
import {showBooksComponentConst} from '../../providers/show-books.component.constants';
import {ShowBooksComponentInteractor} from '../../providers/show-books.component.interactor';

@Component({
  selector: 'app-show-books-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent extends MasterComponent {

  @Input() searchText: string;
  @Input() interactor: ShowBooksComponentInteractor;

  constants = showBooksComponentConst.searchBar;

  showSearchBar(): boolean {

    return this.status !== ServiceStatus.hasIssue;

  }

  filterBooks() {

    this.interactor.filterBooks(this.searchText);

  }

}
