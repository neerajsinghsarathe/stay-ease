import {Component} from '@angular/core';
import {IndexPageService} from '../index-page/index-page.service';
import {Router} from '@angular/router';
import {Booking} from '../../models/booking';
import {FormsModule} from '@angular/forms';
import {AccountPageService} from '../account-page/account-page.service';
import {ToastService} from '../../helpers/toast/toast.service';

@Component({
  selector: 'app-owner-dashboard',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './owner-dashboard.component.html',
  styleUrl: './owner-dashboard.component.css'
})
export class OwnerDashboardComponent {
  ownerData: any = [
    {'name': 'Total Accommodations', 'count': 2},
    {'name': 'Total Bookings', 'count': 2},
    {'name': 'Total Revenue', 'count': 2, 'currency': true}
  ];
  bookingsList: Booking[] = [];
  bookingStatus = ['Pending', 'Confirmed', 'Cancelled', 'Completed'];

  constructor(private indexPageService: IndexPageService, private router: Router, private bookingService: AccountPageService, private toastService: ToastService) {
    this.indexPageService.getOwnerData().subscribe({
      next: (response: any) => {
        this.ownerData = [
          {name: 'Total Accommodations', count: response.totalHotels},
          {name: 'Total Bookings', count: response.totalBookings},
          {name: 'Total Revenue', count: response.totalRevenue, currency: true}
        ]
        this.bookingsList = response.bookingsList.map((booking: any) => ({
          _id: booking.bookingId,
          user: '',
          place: {
            _id: booking.hotelId,
            owner: '',
            title: booking.hotelName,
            address: '',
            photos: [booking.hotelImage],
            description: '',
            perks: [],
            rating: '',
            maxGuests: 0,
            price: 0,
            rooms: [],
            __v: 0
          },
          checkIn: booking.checkInDate,
          checkOut: booking.checkOutDate,
          name: '',
          phone: '',
          price: booking.totalPrice,
          status: ['Pending', 'Confirmed', 'Cancelled', 'Completed'].includes(booking.status) ? booking.status : 'Pending',
          __v: 0
        }));
      },
      error: (error: any) => {
        if (error.status === 401) {
          this.router.navigate(['/login']).then(() => localStorage.clear());
        }
      }
    });
  }

  onUpdateBooking(booking: Booking) {
    this.bookingService.updateBookingStatus(booking._id, {status: booking.status}).subscribe({
      next: () => {
        this.toastService.showSuccess('Booking updated successfully');
      },
      error: () => {
        this.toastService.showError('Error updating booking');
      }
    });
  }
}
