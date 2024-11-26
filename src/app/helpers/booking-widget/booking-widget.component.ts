import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User, UserModel} from '../../models/user.model';
import {Place} from '../../models/place.model';
import {Router, RouterLink} from '@angular/router';
import {AccountPageService} from '../../pages/account-page/account-page.service';
import {ToastService} from '../toast/toast.service';

@Component({
  selector: 'app-booking-widget',
  standalone: true,
  imports: [
    FormsModule,
  ],
  templateUrl: './booking-widget.component.html',
  styleUrl: './booking-widget.component.css'
})
export class BookingWidgetComponent implements OnInit {
  @Input() place!: Place;
  dateRange = { checkIn: null, checkOut: null };
  bookingData = {
    noOfGuests: 1,
    name: '',
    phone: ''
  };
  user!: User;
  numberOfNights: number = 0;


  constructor(
    private accountService: AccountPageService,
    private router: Router,
    private toastService: ToastService
  ) {}

  ngOnInit(): void {
    this.accountService.getUserDetails().subscribe({
      next: (res: any) => {
        if (res.data == null) {
          return;
        }
        this.user = new UserModel(res.data);
        if (this.user.id !== 0) {
          this.bookingData.name = this.user.firstName + ' ' + this.user.lastName;
        }
      }
    });
  }

  calculateNumberOfNights(): void {
    this.numberOfNights = this.dateRange.checkIn && this.dateRange.checkOut
      ? this.differenceInDays(new Date(this.dateRange.checkIn), new Date(this.dateRange.checkOut))
      : 0;
  }

  differenceInDays(date1: Date, date2: Date): number {
    return Math.floor((date2.getTime() - date1.getTime()) / (1000 * 3600 * 24));
  }

  bookPlace(): void {

    if (!this.user) {
      this.toastService.showWarning('Please login to book a place');
      return;
    }

    const body ={
      "UserID": this.user.id,
      "HotelID": this.place._id,
      "Rooms": [
      {
        "RoomID": 1,
        "CheckInDate": this.dateRange.checkIn,
        "CheckOutDate": this.dateRange.checkOut,
      }
    ],
      "TotalPrice": this.place.price * this.numberOfNights,
      "PaymentMethod": "Credit Card"
    };

    this.accountService.bookPlace(body).subscribe({
      next: (res: any) => {
        this.toastService.showSuccess('Booking successful');
        this.router.navigate(['/account/bookings']);
      },
      error: (error) => {
        this.toastService.showError(error.error.data);
      }
    });

  }
}
