import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {InfoCardComponent} from '../../helpers/info-card/info-card.component';
import {Place} from '../../models/place.model';

@Component({
  selector: 'app-places-page',
  standalone: true,
  imports: [
    RouterLink,
    InfoCardComponent
  ],
  templateUrl: './places-page.component.html',
  styleUrl: './places-page.component.css'
})
export class PlacesPageComponent {
  places: Place[] = [
    {
      "_id": "67325949a2fb5c8ca814b376",
      "owner": "6714cba9d5f656cfe6ceda40",
      "title": "abcd",
      "address": "USA",
      "photos": [
        "https://res.cloudinary.com/rahul4019/image/upload/v1731352844/Airbnb/Places/njrd1mdvdobenzk89mts.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1731352850/Airbnb/Places/prdkev3lkwgey7liueqt.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1731352855/Airbnb/Places/vmhmk629yy4lrziagz6k.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1731352891/Airbnb/Places/uxyoryjndfeteauuseo3.jpg",
        "https://res.cloudinary.com/rahul4019/image/upload/v1731352898/Airbnb/Places/e7lglpj1kbhwrpuayxrd.jpg"
      ],
      "description": "qwerty",
      "perks": [
        "tv",
        "wifi",
        "enterence"
      ],
      "extraInfo": "no rules",
      "maxGuests": 10,
      "price": 500,
      "__v": 0
    }
  ];

}
