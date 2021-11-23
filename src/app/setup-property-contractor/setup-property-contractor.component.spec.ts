import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPropertyContractorComponent } from './setup-property-contractor.component';

describe('SetupPropertyContractorComponent', () => {
  let component: SetupPropertyContractorComponent;
  let fixture: ComponentFixture<SetupPropertyContractorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPropertyContractorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPropertyContractorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
