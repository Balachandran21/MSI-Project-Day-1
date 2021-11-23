import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySearchPropertyComponent } from './property-search-property.component';

describe('PropertySearchPropertyComponent', () => {
  let component: PropertySearchPropertyComponent;
  let fixture: ComponentFixture<PropertySearchPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySearchPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
