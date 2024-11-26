import {Component, Input} from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-booking-dates',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './booking-dates.component.html',
  styleUrl: './booking-dates.component.css'
})
export class BookingDatesComponent {
  @Input() className!: string;
  @Input() booking!: {checkIn: Date, checkOut: Date};

  differenceInCalendarDays(checkOut: any, checkIn: any) {
    return Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24));
  }
}
