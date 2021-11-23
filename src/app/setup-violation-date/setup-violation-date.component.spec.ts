import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupViolationDateComponent } from './setup-violation-date.component';

describe('SetupViolationDateComponent', () => {
  let component: SetupViolationDateComponent;
  let fixture: ComponentFixture<SetupViolationDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupViolationDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupViolationDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
