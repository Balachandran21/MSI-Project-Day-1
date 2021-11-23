import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupExemptionFormComponent } from './setup-exemption-form.component';

describe('SetupExemptionFormComponent', () => {
  let component: SetupExemptionFormComponent;
  let fixture: ComponentFixture<SetupExemptionFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupExemptionFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupExemptionFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
