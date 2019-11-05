import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Service, serviceConst, ServiceResponse, ServiceStatus} from '../index';
import {BookResponseModel} from '../../models/book/book-response-model';
import {ListBookResponseModel} from '../../models/list-books/list-book-response-model';

@Injectable({
  providedIn: 'root'
})
export class ListBooksService {

  constructor(private httpClient: HttpClient) {}

  callRequest(searchText: string, page: number, limit: number): Promise<ServiceResponse<ListBookResponseModel>> {

    return new Promise((resolve, reject) => {

      const url = Service.setGetParameter(
        Service.setURl(serviceConst.book.list),
        [
          {name: 'q', value: searchText},
          {name: '_page', value: page},
          {name: '_limit', value: limit},
          {name: '_sort', value: 'id'},
          {name: '_order', value: 'desc'},
        ]
      );

      this.httpClient.get<BookResponseModel[]>(url, {observe: 'response'}).subscribe(response => {

        const listBook = new ListBookResponseModel();

        listBook.total = Number(response.headers.get('X-Total-Count'));
        listBook.books = response.body.map(book => {
          return Object.assign(new BookResponseModel(), book);
        });

        resolve({
          status: ServiceStatus.success,
          data: listBook
        });

      }, () => reject());

    });

  }

}
