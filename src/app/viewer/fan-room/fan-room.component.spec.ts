import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FanRoomComponent } from './fan-room.component';

describe('FanRoomComponent', () => {
  let component: FanRoomComponent;
  let fixture: ComponentFixture<FanRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FanRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FanRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
