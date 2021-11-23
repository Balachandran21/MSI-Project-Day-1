import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupInspectionInspectionComponent } from './setup-inspection-inspection.component';

describe('SetupInspectionInspectionComponent', () => {
  let component: SetupInspectionInspectionComponent;
  let fixture: ComponentFixture<SetupInspectionInspectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupInspectionInspectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupInspectionInspectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
