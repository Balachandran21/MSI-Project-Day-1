import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSearchExemptionComponent } from './vehicle-search-exemption.component';

describe('VehicleSearchExemptionComponent', () => {
  let component: VehicleSearchExemptionComponent;
  let fixture: ComponentFixture<VehicleSearchExemptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSearchExemptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSearchExemptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
