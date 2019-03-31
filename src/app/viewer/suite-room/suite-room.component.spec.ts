import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuiteRoomComponent } from './suite-room.component';

describe('SuiteRoomComponent', () => {
  let component: SuiteRoomComponent;
  let fixture: ComponentFixture<SuiteRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuiteRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuiteRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
