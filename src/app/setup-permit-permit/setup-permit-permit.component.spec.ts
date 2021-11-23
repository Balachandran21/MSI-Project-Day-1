import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPermitPermitComponent } from './setup-permit-permit.component';

describe('SetupPermitPermitComponent', () => {
  let component: SetupPermitPermitComponent;
  let fixture: ComponentFixture<SetupPermitPermitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPermitPermitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPermitPermitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
