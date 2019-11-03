import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Service, serviceConst, ServiceResponse, ServiceStatus} from '../index';
import {BookResponseModel} from '../../models/book/book-response-model';
import {ListBookResponseModel} from '../../models/list-books/list-book-response-model';

@Injectable({
  providedIn: 'root'
})
export class DeleteBookService {

  constructor(private httpClient: HttpClient) {}

  callRequest(id: string): Promise<void> {

    return new Promise((resolve, reject) => {

      const url = Service.setPageGetParameter(Service.setURl(serviceConst.book.delete), [
        { name: 'id', value: id }
      ]);

      this.httpClient.delete(url).subscribe(() => {

        resolve();

      }, () => reject());

    });

  }

}
