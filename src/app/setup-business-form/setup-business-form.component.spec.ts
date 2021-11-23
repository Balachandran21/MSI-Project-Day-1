import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBusinessFormComponent } from './setup-business-form.component';

describe('SetupBusinessFormComponent', () => {
  let component: SetupBusinessFormComponent;
  let fixture: ComponentFixture<SetupBusinessFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupBusinessFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupBusinessFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
