import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupConfigurationCollectionComponent } from './setup-configuration-collection.component';

describe('SetupConfigurationCollectionComponent', () => {
  let component: SetupConfigurationCollectionComponent;
  let fixture: ComponentFixture<SetupConfigurationCollectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupConfigurationCollectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupConfigurationCollectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
