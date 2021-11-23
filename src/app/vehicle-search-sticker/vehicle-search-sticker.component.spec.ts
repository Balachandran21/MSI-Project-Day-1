import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VehicleSearchStickerComponent } from './vehicle-search-sticker.component';

describe('VehicleSearchStickerComponent', () => {
  let component: VehicleSearchStickerComponent;
  let fixture: ComponentFixture<VehicleSearchStickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VehicleSearchStickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VehicleSearchStickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
