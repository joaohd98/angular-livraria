import {BookResponseModel} from '../book/book-response-model';

export class ListBookResponseModel {

  private _total: number;
  private _books: BookResponseModel[];

  get total(): number {
    return this._total;
  }

  set total(value: number) {
    this._total = value;
  }

  get books(): BookResponseModel[] {
    return this._books;
  }

  set books(value: BookResponseModel[]) {
    this._books = value;
  }

}
