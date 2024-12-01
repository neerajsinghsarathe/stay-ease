import { Component } from '@angular/core';
import {InfoCardComponent} from '../../helpers/info-card/info-card.component';
import {Place, PlaceModelList} from '../../models/place.model';
import {DialogModule} from 'primeng/dialog';
import {PlacesFormPageComponent} from '../places-form-page/places-form-page.component';
import {FormsModule} from '@angular/forms';
import {AccountPageService} from '../account-page/account-page.service';

@Component({
  selector: 'app-places-page',
  standalone: true,
  imports: [
    InfoCardComponent,
    DialogModule,
    PlacesFormPageComponent,
    FormsModule
  ],
  templateUrl: './places-page.component.html',
  styleUrl: './places-page.component.css'
})
export class PlacesPageComponent {
  displayModal: boolean = false;
  selectedPlace?: Place = {
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
    "isActive": false,
    "__v": 0
  };
  places: Place[] = [];

  constructor(private accountService: AccountPageService) {
    this.accountService.getAccommodations().subscribe((response: any) => {
      this.places = new PlaceModelList(response.data).places;
    });
  }

  onPlaceFormModal(place?: Place): void {
    this.displayModal = true;
    this.selectedPlace = place;
  }
}
