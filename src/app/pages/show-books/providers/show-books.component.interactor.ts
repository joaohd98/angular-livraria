import {ShowBooksComponent} from '../show-books.component';

export class ShowBooksComponentInteractor {

  static setDefaultPageValue(page: ShowBooksComponent) {

    page.searchText = '';
    page.page = 1;
    page.hasNext = false;
    page.hasNextButton = false;
    page.books = [];

  }

}
