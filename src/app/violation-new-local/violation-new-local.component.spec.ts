import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationNewLocalComponent } from './violation-new-local.component';

describe('ViolationNewLocalComponent', () => {
  let component: ViolationNewLocalComponent;
  let fixture: ComponentFixture<ViolationNewLocalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationNewLocalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationNewLocalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
