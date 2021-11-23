import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySearchBusinessComponent } from './property-search-business.component';

describe('PropertySearchBusinessComponent', () => {
  let component: PropertySearchBusinessComponent;
  let fixture: ComponentFixture<PropertySearchBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySearchBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
