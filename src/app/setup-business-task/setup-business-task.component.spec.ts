import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBusinessTaskComponent } from './setup-business-task.component';

describe('SetupBusinessTaskComponent', () => {
  let component: SetupBusinessTaskComponent;
  let fixture: ComponentFixture<SetupBusinessTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupBusinessTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupBusinessTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
