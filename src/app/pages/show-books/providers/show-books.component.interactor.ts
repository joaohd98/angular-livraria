import {ServiceStatus} from '../../../services';
import {ShowBooksComponent} from '../show-books.component';

export class ShowBooksComponentInteractor {

  private component: ShowBooksComponent;

  constructor(component: ShowBooksComponent) {
    this.component = component;
  }

  setDefaultPageValue() {

    this.component.searchText = '';
    this.component.page = 1;
    this.component.hasNext = false;
    this.component.hasNextButton = true;
    this.component.books = [];

  }

  hasBooks() {

    return this.component.books.length > 0;

  }

  getBooks() {

    this.component.status = ServiceStatus.isLoading;

    const { searchText, page, constants } = this.component;

    this.component.listBookService.callRequest(searchText, page, constants.limit).then(response => {

      this.component.status = ServiceStatus.success;

      this.component.books = response.data.books;
      this.component.hasNext = response.data.total > page * constants.limit;

    }, () => {

      this.component.status = ServiceStatus.hasIssue;

    });


  }

  filterBooks(searchText: string) {

    this.component.searchText = searchText;
    this.component.page = 1;
    this.component.status = ServiceStatus.isLoading;

    this.component.listBookService.callRequest(searchText, this.component.page, this.component.constants.limit).then(response => {

      this.component.status = ServiceStatus.success;

      this.component.books = response.data.books;
      this.component.hasNext = response.data.total > this.component.page * this.component.constants.limit;

    }, () => {

      this.component.status = ServiceStatus.hasIssue;

    });

  }

}
