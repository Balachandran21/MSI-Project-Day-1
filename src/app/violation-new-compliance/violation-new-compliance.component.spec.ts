import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationNewComplianceComponent } from './violation-new-compliance.component';

describe('ViolationNewComplianceComponent', () => {
  let component: ViolationNewComplianceComponent;
  let fixture: ComponentFixture<ViolationNewComplianceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationNewComplianceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationNewComplianceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
