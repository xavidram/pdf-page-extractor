import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfPagesComponent } from './pdf-pages.component';

describe('PdfPagesComponent', () => {
  let component: PdfPagesComponent;
  let fixture: ComponentFixture<PdfPagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfPagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfPagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
