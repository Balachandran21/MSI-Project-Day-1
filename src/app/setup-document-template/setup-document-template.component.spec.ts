import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupDocumentTemplateComponent } from './setup-document-template.component';

describe('SetupDocumentTemplateComponent', () => {
  let component: SetupDocumentTemplateComponent;
  let fixture: ComponentFixture<SetupDocumentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SetupDocumentTemplateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupDocumentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
