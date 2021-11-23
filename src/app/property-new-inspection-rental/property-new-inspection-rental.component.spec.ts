import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNewInspectionRentalComponent } from './property-new-inspection-rental.component';

describe('PropertyNewInspectionRentalComponent', () => {
  let component: PropertyNewInspectionRentalComponent;
  let fixture: ComponentFixture<PropertyNewInspectionRentalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyNewInspectionRentalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNewInspectionRentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
