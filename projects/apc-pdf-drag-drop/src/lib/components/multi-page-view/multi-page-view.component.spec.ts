import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiPageViewComponent } from './multi-page-view.component';

describe('MultiPageViewComponent', () => {
  let component: MultiPageViewComponent;
  let fixture: ComponentFixture<MultiPageViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiPageViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiPageViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
