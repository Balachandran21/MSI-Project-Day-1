import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupViolationViolationComponent } from './setup-violation-violation.component';

describe('SetupViolationViolationComponent', () => {
  let component: SetupViolationViolationComponent;
  let fixture: ComponentFixture<SetupViolationViolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupViolationViolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupViolationViolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
