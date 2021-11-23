import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReportBusinessComponent } from './report-report-business.component';

describe('ReportReportBusinessComponent', () => {
  let component: ReportReportBusinessComponent;
  let fixture: ComponentFixture<ReportReportBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReportBusinessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReportBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
