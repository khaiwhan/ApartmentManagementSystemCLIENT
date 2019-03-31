import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteBookComponent } from './suite-book.component';

describe('SuiteBookComponent', () => {
  let component: SuiteBookComponent;
  let fixture: ComponentFixture<SuiteBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
