import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationCollectionComponent } from './violation-collection.component';

describe('ViolationCollectionComponent', () => {
  let component: ViolationCollectionComponent;
  let fixture: ComponentFixture<ViolationCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
