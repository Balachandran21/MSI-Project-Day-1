import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNewExemptionComponent } from './vehicle-new-exemption.component';

describe('VehicleNewExemptionComponent', () => {
  let component: VehicleNewExemptionComponent;
  let fixture: ComponentFixture<VehicleNewExemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleNewExemptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNewExemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
