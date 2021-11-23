import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationBulkHearingComponent } from './violation-bulk-hearing.component';

describe('ViolationBulkHearingComponent', () => {
  let component: ViolationBulkHearingComponent;
  let fixture: ComponentFixture<ViolationBulkHearingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationBulkHearingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationBulkHearingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
