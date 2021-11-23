import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupExemptionLimitComponent } from './setup-exemption-limit.component';

describe('SetupExemptionLimitComponent', () => {
  let component: SetupExemptionLimitComponent;
  let fixture: ComponentFixture<SetupExemptionLimitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupExemptionLimitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupExemptionLimitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
