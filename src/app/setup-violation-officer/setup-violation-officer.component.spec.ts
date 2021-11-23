import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupViolationOfficerComponent } from './setup-violation-officer.component';

describe('SetupViolationOfficerComponent', () => {
  let component: SetupViolationOfficerComponent;
  let fixture: ComponentFixture<SetupViolationOfficerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupViolationOfficerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupViolationOfficerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
