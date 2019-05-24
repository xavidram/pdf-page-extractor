import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FileBoxesComponent } from './file-boxes.component';

describe('FileBoxesComponent', () => {
  let component: FileBoxesComponent;
  let fixture: ComponentFixture<FileBoxesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FileBoxesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileBoxesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
