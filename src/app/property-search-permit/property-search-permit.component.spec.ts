import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySearchPermitComponent } from './property-search-permit.component';

describe('PropertySearchPermitComponent', () => {
  let component: PropertySearchPermitComponent;
  let fixture: ComponentFixture<PropertySearchPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySearchPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
