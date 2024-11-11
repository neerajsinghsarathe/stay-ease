import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDatesComponent } from './booking-dates.component';

describe('BookingDatesComponent', () => {
  let component: BookingDatesComponent;
  let fixture: ComponentFixture<BookingDatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookingDatesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookingDatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
