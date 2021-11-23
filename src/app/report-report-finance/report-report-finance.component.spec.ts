import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReportFinanceComponent } from './report-report-finance.component';

describe('ReportReportFinanceComponent', () => {
  let component: ReportReportFinanceComponent;
  let fixture: ComponentFixture<ReportReportFinanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReportFinanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReportFinanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
