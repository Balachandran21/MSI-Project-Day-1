import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupConfigurationSystemComponent } from './setup-configuration-system.component';

describe('SetupConfigurationSystemComponent', () => {
  let component: SetupConfigurationSystemComponent;
  let fixture: ComponentFixture<SetupConfigurationSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupConfigurationSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupConfigurationSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
