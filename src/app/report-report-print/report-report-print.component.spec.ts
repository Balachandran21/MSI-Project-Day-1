import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReportPrintComponent } from './report-report-print.component';

describe('ReportReportPrintComponent', () => {
  let component: ReportReportPrintComponent;
  let fixture: ComponentFixture<ReportReportPrintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReportPrintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReportPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
