import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupViolationFineComponent } from './setup-violation-fine.component';

describe('SetupViolationFineComponent', () => {
  let component: SetupViolationFineComponent;
  let fixture: ComponentFixture<SetupViolationFineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupViolationFineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupViolationFineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
