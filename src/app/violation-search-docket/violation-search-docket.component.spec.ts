import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViolationSearchDocketComponent } from './violation-search-docket.component';

describe('ViolationSearchDocketComponent', () => {
  let component: ViolationSearchDocketComponent;
  let fixture: ComponentFixture<ViolationSearchDocketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViolationSearchDocketComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViolationSearchDocketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
