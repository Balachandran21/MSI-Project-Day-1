import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySearchInspectionComponent } from './property-search-inspection.component';

describe('PropertySearchInspectionComponent', () => {
  let component: PropertySearchInspectionComponent;
  let fixture: ComponentFixture<PropertySearchInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySearchInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
