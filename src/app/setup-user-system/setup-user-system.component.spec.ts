import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupUserSystemComponent } from './setup-user-system.component';

describe('SetupUserSystemComponent', () => {
  let component: SetupUserSystemComponent;
  let fixture: ComponentFixture<SetupUserSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupUserSystemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupUserSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
