import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupViolationOffenseComponent } from './setup-violation-offense.component';

describe('SetupViolationOffenseComponent', () => {
  let component: SetupViolationOffenseComponent;
  let fixture: ComponentFixture<SetupViolationOffenseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupViolationOffenseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupViolationOffenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
