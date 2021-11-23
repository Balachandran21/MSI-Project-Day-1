import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReportViolationComponent } from './report-report-violation.component';

describe('ReportReportViolationComponent', () => {
  let component: ReportReportViolationComponent;
  let fixture: ComponentFixture<ReportReportViolationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReportViolationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReportViolationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
