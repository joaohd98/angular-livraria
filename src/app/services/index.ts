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
    add: 'books/{id}',
    edit: 'books/{id}',
    remove: 'books/{id}',
  }

};

