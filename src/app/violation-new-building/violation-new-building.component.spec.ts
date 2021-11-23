import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationNewBuildingComponent } from './violation-new-building.component';

describe('ViolationNewBuildingComponent', () => {
  let component: ViolationNewBuildingComponent;
  let fixture: ComponentFixture<ViolationNewBuildingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationNewBuildingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationNewBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
