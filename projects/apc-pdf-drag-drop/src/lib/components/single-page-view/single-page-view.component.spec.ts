import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SinglePageViewComponent } from './single-page-view.component';

describe('SinglePageViewComponent', () => {
  let component: SinglePageViewComponent;
  let fixture: ComponentFixture<SinglePageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SinglePageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SinglePageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
