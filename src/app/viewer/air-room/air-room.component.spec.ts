import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AirRoomComponent } from './air-room.component';

describe('AirRoomComponent', () => {
  let component: AirRoomComponent;
  let fixture: ComponentFixture<AirRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AirRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AirRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
