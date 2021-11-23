import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReportPropertyComponent } from './report-report-property.component';

describe('ReportReportPropertyComponent', () => {
  let component: ReportReportPropertyComponent;
  let fixture: ComponentFixture<ReportReportPropertyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReportPropertyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReportPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
