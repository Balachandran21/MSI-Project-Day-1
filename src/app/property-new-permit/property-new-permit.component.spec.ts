import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNewPermitComponent } from './property-new-permit.component';

describe('PropertyNewPermitComponent', () => {
  let component: PropertyNewPermitComponent;
  let fixture: ComponentFixture<PropertyNewPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyNewPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNewPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
