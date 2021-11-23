import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNewInspectionServiceComponent } from './property-new-inspection-service.component';

describe('PropertyNewInspectionServiceComponent', () => {
  let component: PropertyNewInspectionServiceComponent;
  let fixture: ComponentFixture<PropertyNewInspectionServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyNewInspectionServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNewInspectionServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
