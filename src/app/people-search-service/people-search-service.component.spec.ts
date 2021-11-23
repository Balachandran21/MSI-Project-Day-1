import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleSearchServiceComponent } from './people-search-service.component';

describe('PeopleSearchServiceComponent', () => {
  let component: PeopleSearchServiceComponent;
  let fixture: ComponentFixture<PeopleSearchServiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleSearchServiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleSearchServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
