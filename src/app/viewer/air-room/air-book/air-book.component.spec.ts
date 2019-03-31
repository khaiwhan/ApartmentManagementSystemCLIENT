import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirBookComponent } from './air-book.component';

describe('AirBookComponent', () => {
  let component: AirBookComponent;
  let fixture: ComponentFixture<AirBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
