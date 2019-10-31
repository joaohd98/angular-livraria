import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterLoadingComponent } from './footer-loading.component';

describe('FooterLoadingComponent', () => {
  let component: FooterLoadingComponent;
  let fixture: ComponentFixture<FooterLoadingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterLoadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
