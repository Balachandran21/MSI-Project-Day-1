import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNewInspectionGeneralComponent } from './property-new-inspection-general.component';

describe('PropertyNewInspectionGeneralComponent', () => {
  let component: PropertyNewInspectionGeneralComponent;
  let fixture: ComponentFixture<PropertyNewInspectionGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyNewInspectionGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNewInspectionGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
