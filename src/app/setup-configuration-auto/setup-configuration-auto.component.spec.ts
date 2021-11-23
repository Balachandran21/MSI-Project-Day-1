import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupConfigurationAutoComponent } from './setup-configuration-auto.component';

describe('SetupConfigurationAutoComponent', () => {
  let component: SetupConfigurationAutoComponent;
  let fixture: ComponentFixture<SetupConfigurationAutoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupConfigurationAutoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupConfigurationAutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
