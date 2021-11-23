import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropertyNewServiceComponent } from './property-new-service.component';

describe('PropertyNewServiceComponent', () => {
  let component: PropertyNewServiceComponent;
  let fixture: ComponentFixture<PropertyNewServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropertyNewServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropertyNewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
