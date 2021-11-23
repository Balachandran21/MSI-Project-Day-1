import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationNewTowComponent } from './violation-new-tow.component';

describe('ViolationNewTowComponent', () => {
  let component: ViolationNewTowComponent;
  let fixture: ComponentFixture<ViolationNewTowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationNewTowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationNewTowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
