import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesFormPageComponent } from './places-form-page.component';

describe('PlacesFormPageComponent', () => {
  let component: PlacesFormPageComponent;
  let fixture: ComponentFixture<PlacesFormPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlacesFormPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlacesFormPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
