import {environment} from '../../environments/environment';

export enum ServiceStatus {

  noAction,
  isLoading,
  hasIssue,
  success,

}

export interface ServiceResponse<Type> {

  status: ServiceStatus;
  data: Type;

}

export const serviceConst = {

  book: {
    list: 'books',
    get: 'books/{id}',
    add: 'books',
    edit: 'books/{id}',
    delete: 'books/{id}',
  }

};

export class Service {

  static setURl = (path: string): string => environment.url + path;

  static setGetParameter(url: string, parameters: {name: string, value: string | number}[] ): string {

    let firstTry = true;

    parameters.forEach(paramater => {

      if (firstTry) {

        url += '?';

        firstTry = false;

      }

      else
        url += '&';

      url += paramater.name + '=' + paramater.value;

    });

    return url;

  }


  static setPageGetParameter(url: string, parameters: {name: string, value: string | number}[] ): string {

    parameters.forEach(paramater => url = url.replace(`{${paramater.name}}`, String(paramater.value)));

    return url;

  }

}

