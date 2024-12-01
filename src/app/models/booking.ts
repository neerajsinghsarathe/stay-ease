import {Place} from './place.model';

export interface Booking {
  _id: number;
  user: string;
  place: Place;
  checkIn: Date;
  checkOut: Date;
  name: string;
  phone: string;
  price: number;
  status?: string;
  __v: number;
}

export interface BookingAPIModel {
  bookingId: number;
  bookingDate: Date;
  totalPrice: number;
  status: string;
  hotelId: number;
  hotelName: string;
  hotelImage: string;
  checkInDate: Date;
  checkOutDate: Date;
}

export class BookingModel implements Booking {
  _id: number;
  user: string;
  place: Place;
  checkIn: Date;
  checkOut: Date;
  name: string;
  phone: string;
  price: number;
  __v: number;

  constructor(booking: BookingAPIModel) {
    this._id = booking.bookingId;
    this.user = '';
    this.place = {
      _id: booking.hotelId,
      owner: '',
      title: booking.hotelName,
      fullAddress: '',
      photos: [booking.hotelImage],
      description: '',
      perks: [],
      rating: '',
      maxGuests: 0,
      price: 0,
      rooms: [],
      __v: 0
    };
    this.checkIn = booking.checkInDate;
    this.checkOut = booking.checkOutDate;
    this.name = '';
    this.phone = '';
    this.price = booking.totalPrice;
    this.__v = 0;
  }
}

export class BookingModelList {
  bookings: BookingModel[];

  constructor(bookings: BookingAPIModel[]) {
    this.bookings = bookings.map(booking => new BookingModel(booking));
  }
}
