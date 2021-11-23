import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupPropertyDataComponent } from './setup-property-data.component';

describe('SetupPropertyDataComponent', () => {
  let component: SetupPropertyDataComponent;
  let fixture: ComponentFixture<SetupPropertyDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupPropertyDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupPropertyDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
