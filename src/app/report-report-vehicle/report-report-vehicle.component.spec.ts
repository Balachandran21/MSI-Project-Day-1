import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportReportVehicleComponent } from './report-report-vehicle.component';

describe('ReportReportVehicleComponent', () => {
  let component: ReportReportVehicleComponent;
  let fixture: ComponentFixture<ReportReportVehicleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportReportVehicleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportReportVehicleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
