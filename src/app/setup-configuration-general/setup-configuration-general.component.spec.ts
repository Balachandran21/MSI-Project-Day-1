import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupConfigurationGeneralComponent } from './setup-configuration-general.component';

describe('SetupConfigurationGeneralComponent', () => {
  let component: SetupConfigurationGeneralComponent;
  let fixture: ComponentFixture<SetupConfigurationGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupConfigurationGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupConfigurationGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
