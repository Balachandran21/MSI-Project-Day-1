import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertySearchServiceComponent } from './property-search-service.component';

describe('PropertySearchServiceComponent', () => {
  let component: PropertySearchServiceComponent;
  let fixture: ComponentFixture<PropertySearchServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertySearchServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertySearchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
