import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDocumentDocumentComponent } from './setup-document-document.component';

describe('SetupDocumentDocumentComponent', () => {
  let component: SetupDocumentDocumentComponent;
  let fixture: ComponentFixture<SetupDocumentDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupDocumentDocumentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDocumentDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
