import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Service, serviceConst, ServiceResponse, ServiceStatus} from '../index';
import {BookResponseModel} from '../../models/book/book-response-model';
import {ListBookResponseModel} from '../../models/list-books/list-book-response-model';

@Injectable({
  providedIn: 'root'
})
export class AddBookService {

  constructor(private httpClient: HttpClient) {}

  callRequest(request: BookResponseModel): Promise<void> {

    return new Promise((resolve, reject) => {

      const url = Service.setURl(serviceConst.book.add);

      this.httpClient.post(url, request).subscribe(response => {

        resolve();

      }, () => reject());

    });

  }

}
