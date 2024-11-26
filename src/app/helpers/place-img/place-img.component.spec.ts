import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceImgComponent } from './place-img.component';

describe('PlaceImgComponent', () => {
  let component: PlaceImgComponent;
  let fixture: ComponentFixture<PlaceImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
