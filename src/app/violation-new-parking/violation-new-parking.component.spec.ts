import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationNewParkingComponent } from './violation-new-parking.component';

describe('ViolationNewParkingComponent', () => {
  let component: ViolationNewParkingComponent;
  let fixture: ComponentFixture<ViolationNewParkingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationNewParkingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationNewParkingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
