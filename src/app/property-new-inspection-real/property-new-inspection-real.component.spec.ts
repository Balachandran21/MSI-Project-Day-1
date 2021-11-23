import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNewInspectionRealComponent } from './property-new-inspection-real.component';

describe('PropertyNewInspectionRealComponent', () => {
  let component: PropertyNewInspectionRealComponent;
  let fixture: ComponentFixture<PropertyNewInspectionRealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyNewInspectionRealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNewInspectionRealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
