import {Component, Input} from '@angular/core';
import {Place} from '../../models/place.model';

@Component({
  selector: 'app-place-gallery',
  standalone: true,
  imports: [],
  templateUrl: './place-gallery.component.html',
  styleUrl: './place-gallery.component.css'
})
export class PlaceGalleryComponent {
  @Input() place: Place = {
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
  showAllPhotos: boolean = false;

  setShowAllPhotos(value: boolean) {
    this.showAllPhotos = value;
  }
}
