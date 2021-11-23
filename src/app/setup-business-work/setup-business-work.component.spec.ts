import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBusinessWorkComponent } from './setup-business-work.component';

describe('SetupBusinessWorkComponent', () => {
  let component: SetupBusinessWorkComponent;
  let fixture: ComponentFixture<SetupBusinessWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupBusinessWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupBusinessWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
