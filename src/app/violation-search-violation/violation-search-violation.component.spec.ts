import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationSearchViolationComponent } from './violation-search-violation.component';

describe('ViolationSearchViolationComponent', () => {
  let component: ViolationSearchViolationComponent;
  let fixture: ComponentFixture<ViolationSearchViolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationSearchViolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationSearchViolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
