import { TestBed } from '@angular/core/testing';

import { ListBooksService } from './list-books.service';

describe('ListBooksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ListBooksService = TestBed.get(ListBooksService);
    expect(service).toBeTruthy();
  });
});
