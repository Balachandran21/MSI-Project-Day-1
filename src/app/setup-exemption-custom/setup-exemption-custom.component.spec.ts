import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupExemptionCustomComponent } from './setup-exemption-custom.component';

describe('SetupExemptionCustomComponent', () => {
  let component: SetupExemptionCustomComponent;
  let fixture: ComponentFixture<SetupExemptionCustomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupExemptionCustomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupExemptionCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
