import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupUserRoleComponent } from './setup-user-role.component';

describe('SetupUserRoleComponent', () => {
  let component: SetupUserRoleComponent;
  let fixture: ComponentFixture<SetupUserRoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupUserRoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupUserRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
