import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanBookComponent } from './fan-book.component';

describe('FanBookComponent', () => {
  let component: FanBookComponent;
  let fixture: ComponentFixture<FanBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
