import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleNewStickerComponent } from './vehicle-new-sticker.component';

describe('VehicleNewStickerComponent', () => {
  let component: VehicleNewStickerComponent;
  let fixture: ComponentFixture<VehicleNewStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleNewStickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleNewStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
