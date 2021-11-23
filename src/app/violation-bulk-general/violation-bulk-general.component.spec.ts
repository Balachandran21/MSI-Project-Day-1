import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationBulkGeneralComponent } from './violation-bulk-general.component';

describe('ViolationBulkGeneralComponent', () => {
  let component: ViolationBulkGeneralComponent;
  let fixture: ComponentFixture<ViolationBulkGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationBulkGeneralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationBulkGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
