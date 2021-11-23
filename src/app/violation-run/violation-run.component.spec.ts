import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationRunComponent } from './violation-run.component';

describe('ViolationRunComponent', () => {
  let component: ViolationRunComponent;
  let fixture: ComponentFixture<ViolationRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
