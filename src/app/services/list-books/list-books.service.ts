import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {serviceConst, ServiceResponse, ServiceStatus} from '../index';
import {BookResponseModel} from '../../models/book/book-response-model';

@Injectable({
  providedIn: 'root'
})
export class ListBooksService {

  constructor(public httpClient: HttpClient) {}

  callRequest(): Promise<ServiceResponse<BookResponseModel[]>> {

    return new Promise((resolve, reject) => {

      this.httpClient.get<BookResponseModel[]>(environment.url + serviceConst.book.list).subscribe(response => {

        resolve({
          status: ServiceStatus.success,
          data: response.map(book => {
            return Object.assign(new BookResponseModel(), book);
          }),
        });

      }, () => {

        reject();

      });

    });

  }

}
