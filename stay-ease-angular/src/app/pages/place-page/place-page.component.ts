import {Component, OnInit} from '@angular/core';
import {Place} from '../../models/place.model';
import {AddressLinkComponent} from '../../helpers/address-link/address-link.component';
import {PlaceGalleryComponent} from '../../helpers/place-gallery/place-gallery.component';
import {PerksWidgetComponent} from '../../helpers/perks-widget/perks-widget.component';
import {BookingWidgetComponent} from '../../helpers/booking-widget/booking-widget.component';

@Component({
  selector: 'app-place-page',
  standalone: true,
  imports: [
    AddressLinkComponent,
    PlaceGalleryComponent,
    PerksWidgetComponent,
    BookingWidgetComponent
  ],
  templateUrl: './place-page.component.html',
  styleUrl: './place-page.component.css'
})
export class PlacePageComponent implements OnInit{
  place: Place = {
    "_id": "",
    "owner": "",
    "title": "",
    "address": "",
    "perks": [],
    "extraInfo": "",
    "checkIn": 0,
    "checkOut": 0,
    "maxGuests": 0,
    "price": 0,
    "__v": 0,
    "description": "",
    "photos": []
  };

  constructor() {}

  ngOnInit(): void {
    this.place = {
      "_id": "64116bea6f6b01ef935b1cb7",
      "owner": "63d51892fe815b9f54e7bea6",
      "title": "Cider Chalet-F: 2BRK MountainView Apartment",
      "address": "Manali, Himachal Pradesh, India",
      "perks": [
        "enterence",
        "wifi",
        "radio",
        "tv",
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
    }
  }

}
