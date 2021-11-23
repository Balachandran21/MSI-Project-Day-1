import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNewPropertyComponent } from './property-new-property.component';

describe('PropertyNewPropertyComponent', () => {
  let component: PropertyNewPropertyComponent;
  let fixture: ComponentFixture<PropertyNewPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyNewPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNewPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
