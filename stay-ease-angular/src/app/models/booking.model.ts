import {Place} from './place.model';

export interface BookingModel {
  _id: string;
  user: string;
  place: Place;
  checkIn: Date;
  checkOut: Date;
  name: string;
  phone: string;
  price: number;
  __v: number;
}
