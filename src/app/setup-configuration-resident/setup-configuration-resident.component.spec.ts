import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupConfigurationResidentComponent } from './setup-configuration-resident.component';

describe('SetupConfigurationResidentComponent', () => {
  let component: SetupConfigurationResidentComponent;
  let fixture: ComponentFixture<SetupConfigurationResidentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupConfigurationResidentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupConfigurationResidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
