import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {BookingDatesComponent} from '../../helpers/booking-dates/booking-dates.component';
import {DialogModule} from "primeng/dialog";
import {FormsModule} from "@angular/forms";
import {AddressLinkComponent} from '../../helpers/address-link/address-link.component';
import {Booking, BookingModelList} from '../../models/booking';
import {PlaceGalleryComponent} from '../../helpers/place-gallery/place-gallery.component';
import {AccountPageService} from '../account-page/account-page.service';
import {IndexPageService} from '../index-page/index-page.service';
import {PlaceModel} from '../../models/place.model';
import {RatingModule} from 'primeng/rating';
import {ReviewsComponent} from '../../helpers/reviews/reviews.component';
@Component({
  selector: 'app-bookings-page',
  standalone: true,
  imports: [
    RouterLink,
    BookingDatesComponent,
    DialogModule,
    FormsModule,
    AddressLinkComponent,
    PlaceGalleryComponent,
    RatingModule,
    ReviewsComponent
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
      "fullAddress": "",
      "photos": [],
      "description": "",
      "perks": [],
      "rating": "",
      "maxGuests": 0,
      "price": 0,
      "rooms": [],
      "reviews": [],
      "__v": 0
    },
    "checkIn": new Date(),
    "checkOut": new Date(),
    "name": "",
    "phone": "",
    "price": 0,
    "__v": 0
  };
  reviewForm = {
    Rating: 0,
    Comment: ''
  }

  constructor(
    private indexPageService: IndexPageService,
    private accountService: AccountPageService
  ) {
    this.getBookings();
  }

  getBookings() {
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
        this.indexPageService.getReviews(booking.place._id).subscribe({
          next: (response: any) => {
            this.selectedPlace.place.reviews = response.data;
          }
        });
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
        "fullAddress": "",
        "photos": [],
        "description": "",
        "perks": [],
        "rating": "",
        "maxGuests": 0,
        "price": 0,
        "rooms": [],
        "reviews": [],
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

  postReview() {
    const data = {
      ...this.reviewForm,
      HotelID: this.selectedPlace.place._id
    };
    this.accountService.postReview(data).subscribe({
      next: (response: any) => {
        this.reviewForm = {
          Rating: 0,
          Comment: ''
        };
        this.resetSelectedBooking();
        this.getBookings();
      }
    });
  }
}
