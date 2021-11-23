import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleNewServiceComponent } from './people-new-service.component';

describe('PeopleNewServiceComponent', () => {
  let component: PeopleNewServiceComponent;
  let fixture: ComponentFixture<PeopleNewServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleNewServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleNewServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
