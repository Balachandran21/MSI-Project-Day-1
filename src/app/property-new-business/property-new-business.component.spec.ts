import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNewBusinessComponent } from './property-new-business.component';

describe('PropertyNewBusinessComponent', () => {
  let component: PropertyNewBusinessComponent;
  let fixture: ComponentFixture<PropertyNewBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyNewBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNewBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
