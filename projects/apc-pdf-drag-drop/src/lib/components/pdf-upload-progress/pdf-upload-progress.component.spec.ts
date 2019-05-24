import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfUploadProgressComponent } from './pdf-upload-progress.component';

describe('PdfUploadProgressComponent', () => {
  let component: PdfUploadProgressComponent;
  let fixture: ComponentFixture<PdfUploadProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfUploadProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfUploadProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
