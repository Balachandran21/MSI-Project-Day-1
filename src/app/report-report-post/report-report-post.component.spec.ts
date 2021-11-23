import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReportPostComponent } from './report-report-post.component';

describe('ReportReportPostComponent', () => {
  let component: ReportReportPostComponent;
  let fixture: ComponentFixture<ReportReportPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReportPostComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReportPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
