import { TestBed } from '@angular/core/testing';

import { AddBookService } from './add-book.service';

describe('DeleteBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddBookService = TestBed.get(AddBookService);
    expect(service).toBeTruthy();
  });
});
