import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User} from '../../models/user.model';
import {Place} from '../../models/place.model';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-booking-widget',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './booking-widget.component.html',
  styleUrl: './booking-widget.component.css'
})
export class BookingWidgetComponent implements OnInit {
  @Input() place!: Place;
  dateRange = { from: null, to: null };
  bookingData = {
    noOfGuests: 1,
    name: '',
    phone: ''
  };
  redirect = '';
  user!: User;


  constructor(
    // private authService: AuthService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    /*this.authService.getUser().subscribe((user: any) => {
      this.user = user;
      if (this.user) {
        this.bookingData.name = this.user.name;
      }
    });*/
  }

  get numberOfNights(): number {
    return this.dateRange.from && this.dateRange.to
      ? this.differenceInDays(new Date(this.dateRange.to), new Date(this.dateRange.from))
      : 0;
  }

  differenceInDays(date1: Date, date2: Date): number {
    return Math.floor((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
  }
}
