import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationBootComponent } from './violation-boot.component';

describe('ViolationBootComponent', () => {
  let component: ViolationBootComponent;
  let fixture: ComponentFixture<ViolationBootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationBootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationBootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
