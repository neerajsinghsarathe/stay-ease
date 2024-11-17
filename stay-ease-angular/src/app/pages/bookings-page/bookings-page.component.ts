import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BookingDatesComponent} from '../../helpers/booking-dates/booking-dates.component';
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {AddressLinkComponent} from '../../helpers/address-link/address-link.component';
import {Booking, BookingModelList} from '../../models/booking';
import {PlaceGalleryComponent} from '../../helpers/place-gallery/place-gallery.component';
import {AccountPageService} from '../account-page/account-page.service';
import {ToastService} from '../../helpers/toast/toast.service';
import {IndexPageService} from '../index-page/index-page.service';
import {PlaceModel} from '../../models/place.model';

@Component({
  selector: 'app-bookings-page',
  standalone: true,
  imports: [
    RouterLink,
    BookingDatesComponent,
    DialogModule,
    FormsModule,
    AddressLinkComponent,
    PlaceGalleryComponent
  ],
  templateUrl: './bookings-page.component.html',
  styleUrl: './bookings-page.component.css'
})
export class BookingsPageComponent {

  bookings: Booking[] = [];
  viewBookingModal: boolean = false;
  selectedPlace: Booking = {
    "_id": 0,
    "user": "",
    "place": {
      "_id": 0,
      "owner": "",
      "title": "",
      "address": "",
      "photos": [],
      "description": "",
      "perks": [],
      "extraInfo": "",
      "maxGuests": 0,
      "price": 0,
      "__v": 0
    },
    "checkIn": new Date(),
    "checkOut": new Date(),
    "name": "",
    "phone": "",
    "price": 0,
    "__v": 0
  };

  constructor(
    private indexPageService: IndexPageService,
    private accountService: AccountPageService,
    private toastService: ToastService
  ) {
    this.accountService.getBookings().subscribe({
      next: (response: any) => {
        this.bookings = new BookingModelList(response.data).bookings;
      }
    });
  }

  viewBooking(booking: Booking): void {
    this.viewBookingModal = true;
    this.indexPageService.getPlace(booking.place._id).subscribe({
      next: (response: any) => {
        this.selectedPlace = booking;
        this.selectedPlace.place = new PlaceModel(response.data);
      }
    });
  }

  resetSelectedBooking() {
    this.viewBookingModal = false;
    this.selectedPlace = {
      "_id": 0,
      "user": "",
      "place": {
        "_id": 0,
        "owner": "",
        "title": "",
        "address": "",
        "photos": [],
        "description": "",
        "perks": [],
        "extraInfo": "",
        "maxGuests": 0,
        "price": 0,
        "__v": 0
      },
      "checkIn": new Date(),
      "checkOut": new Date(),
      "name": "",
      "phone": "",
      "price": 0,
      "__v": 0
    };
  }
}
