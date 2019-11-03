import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Service, serviceConst, ServiceResponse, ServiceStatus} from '../index';
import {BookResponseModel} from '../../models/book/book-response-model';
import {ListBookResponseModel} from '../../models/list-books/list-book-response-model';

@Injectable({
  providedIn: 'root'
})
export class EditBookService {

  constructor(private httpClient: HttpClient) {}

  callRequest(id: string, request: BookResponseModel): Promise<void> {

    return new Promise((resolve, reject) => {

      const url = Service.setPageGetParameter(Service.setURl(serviceConst.book.edit), [
        {name: 'id', value: id}
      ]);

      this.httpClient.put(url, request).subscribe( () => resolve(), () => reject());

    });

  }

}
