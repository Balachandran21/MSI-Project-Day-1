import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationExpungeComponent } from './violation-expunge.component';

describe('ViolationExpungeComponent', () => {
  let component: ViolationExpungeComponent;
  let fixture: ComponentFixture<ViolationExpungeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationExpungeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationExpungeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
