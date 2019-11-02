import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputAuthorComponent } from './input-author.component';

describe('InputAuthorComponent', () => {
  let component: InputAuthorComponent;
  let fixture: ComponentFixture<InputAuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputAuthorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputAuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
