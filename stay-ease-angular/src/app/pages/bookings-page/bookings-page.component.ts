import { Component } from '@angular/core';
import {Place} from '../../models/place.model';
import {RouterLink} from '@angular/router';
import {BookingDatesComponent} from '../../helpers/booking-dates/booking-dates.component';

@Component({
  selector: 'app-bookings-page',
  standalone: true,
  imports: [
    RouterLink,
    BookingDatesComponent
  ],
  templateUrl: './bookings-page.component.html',
  styleUrl: './bookings-page.component.css'
})
export class BookingsPageComponent {

  bookings: {
    _id: string,
    user: string,
    place: Place,
    checkIn: Date,
    checkOut: Date,
    name: string,
    phone: string,
    price: number,
    __v: number
  }[] = [
    {
      "_id": "673258d1a2fb5c8ca814b365",
      "user": "6714cba9d5f656cfe6ceda40",
      "place": {
        "_id": "64116bea6f6b01ef935b1cb7",
        "owner": "63d51892fe815b9f54e7bea6",
        "title": "Cider Chalet-F: 2BRK MountainView Apartment",
        "address": "Manali, Himachal Pradesh, India",
        "perks": [
          "enterence",
          "wifi",
          "radio",
          "tv"
        ],
        "extraInfo": "-Check-in time is 1pm & Check-out time is 10 am. Early check-in or late checkout is permitted based on availability and prior intimation.\n*Based on availability, early checkin is permitted from 10am onwards. If you wish to check-in before 10am, an early checkin fee will be applicable.\n*Late checkout is permitted based on availability and a fee may be applicable based on checkout time. Please contact host regarding the same.",
        "checkIn": 13,
        "checkOut": 10,
        "maxGuests": 4,
        "price": 2840,
        "__v": 3,
        "description": "Ménage - By The Beas , A colonial style hill cottage near Manali, this delightful vacation home promises the perfect mix of hills with a scenic river side in the privacy of your own space. It offers a great stay on the river bank amidst a small Apple orchard.\nTastefully done up interiors, 3 cosy bedrooms, a large living room with fireplace, sun bathing attic with a view of the river and mountains, bon-fire & barbecue by our cook, absolutely perfect for a laid-back friends or family staycation.",
        "photos": [
          "https://res.cloudinary.com/rahul4019/image/upload/v1694365883/Airbnb/Places/liz5ro0ahknewjsdjgsb.jpg",
          "https://res.cloudinary.com/rahul4019/image/upload/v1694365796/Airbnb/Places/j2nyjfrkfocnmypobxyy.jpg",
          "https://res.cloudinary.com/rahul4019/image/upload/v1694365907/Airbnb/Places/meewrjm30dxwi2bjhsgj.jpg",
          "https://res.cloudinary.com/rahul4019/image/upload/v1694365919/Airbnb/Places/bnzwau9h3wllv7bckjxr.jpg",
          "https://res.cloudinary.com/rahul4019/image/upload/v1694365935/Airbnb/Places/maaqd97vn8gntdhxqgwm.jpg"
        ]
      },
      "checkIn": new Date("2024-11-11T19:19:36.268Z"),
      "checkOut": new Date("2024-11-16T19:19:36.268Z"),
      "name": "John Doe",
      "phone": "9876543215",
      "price": 14200,
      "__v": 0
    }
  ];

}
