import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupBusinessFeeComponent } from './setup-business-fee.component';

describe('SetupBusinessFeeComponent', () => {
  let component: SetupBusinessFeeComponent;
  let fixture: ComponentFixture<SetupBusinessFeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupBusinessFeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupBusinessFeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
