import {Component, Input, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {User, UserModel} from '../../models/user.model';
import {Place, Room} from '../../models/place.model';
import {Router, RouterLink} from '@angular/router';
import {AccountPageService} from '../../pages/account-page/account-page.service';
import {ToastService} from '../toast/toast.service';
import {formatDate} from '@angular/common';
import {LoaderComponent} from '../loader/loader.component';

@Component({
  selector: 'app-booking-widget',
  standalone: true,
  imports: [
    FormsModule,
    LoaderComponent,
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
    phone: '',
    roomType: '',
  };
  user!: User;
  numberOfNights: number = 0;
  isRoomAvailable: any = true;
  checkingAvailability: boolean = false;


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
    let room: Room | undefined;
    if(this.bookingData.roomType !== '') {
       room = this.place.rooms.find(room => room.roomType === this.bookingData.roomType);
    } else {
      room = this.place.rooms[0];
    }

    if(room?.capacity && room?.capacity < this.bookingData.noOfGuests) {
      this.toastService.showError('Number of guests exceed room capacity');
      return;
    }

    const body ={
      "UserID": this.user.id,
      "HotelID": this.place._id,
      "Rooms": [
      {
        "RoomID": room?.roomId ?? 1,
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

  getRoomPrice() {
    const room = this.place.rooms.find(room => room.roomType === this.bookingData.roomType);
    this.place.price = room?.price ?? 0;
  }

  validateBooking() {
    if(this.numberOfNights < 1 || !this.bookingData.noOfGuests || !this.bookingData.roomType) return;
    this.checkingAvailability = true;
    const data = {
      hotelId: this.place._id,
      checkIn: formatDate(this.dateRange.checkIn ?? "", 'dd-MM-yyyy', 'en'),
      checkOut: formatDate(this.dateRange.checkOut ?? "", 'dd-MM-yyyy', 'en'),
      capacity: this.bookingData.noOfGuests
    };
    this.accountService.checkAvailability(data).subscribe({
      next: (res: any) => {
        const rooms = res.data;
        this.isRoomAvailable = rooms.some((room: any) => room.roomType === this.bookingData.roomType && room.isAvailable);
        this.checkingAvailability = false;
        console.log(this.isRoomAvailable);
      }
    });
  }
}
