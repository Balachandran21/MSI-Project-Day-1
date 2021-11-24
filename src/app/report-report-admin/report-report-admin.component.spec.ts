import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReportAdminComponent } from './report-report-admin.component';

describe('ReportReportAdminComponent', () => {
  let component: ReportReportAdminComponent;
  let fixture: ComponentFixture<ReportReportAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReportAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReportAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
