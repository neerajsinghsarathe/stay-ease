import {Component, OnInit} from '@angular/core';
import {Place, PlaceModel, ReviewsList} from '../../models/place.model';
import {AddressLinkComponent} from '../../helpers/address-link/address-link.component';
import {PlaceGalleryComponent} from '../../helpers/place-gallery/place-gallery.component';
import {PerksWidgetComponent} from '../../helpers/perks-widget/perks-widget.component';
import {BookingWidgetComponent} from '../../helpers/booking-widget/booking-widget.component';
import {IndexPageService} from '../index-page/index-page.service';
import {ActivatedRoute} from '@angular/router';
import {RatingModule} from 'primeng/rating';
import {FormsModule} from '@angular/forms';
import {CurrencyPipe} from '@angular/common';
import {TagModule} from 'primeng/tag';
import {ReviewsComponent} from '../../helpers/reviews/reviews.component';

@Component({
  selector: 'app-place-page',
  standalone: true,
  imports: [
    AddressLinkComponent,
    PlaceGalleryComponent,
    PerksWidgetComponent,
    BookingWidgetComponent,
    RatingModule,
    FormsModule,
    CurrencyPipe,
    TagModule,
    ReviewsComponent
  ],
  templateUrl: './place-page.component.html',
  styleUrl: './place-page.component.css'
})
export class PlacePageComponent implements OnInit{
  place: Place = {
    "_id": 0,
    "owner": "",
    "title": "",
    "address": "",
    "perks": [],
    "rating": "",
    "checkIn": 0,
    "checkOut": 0,
    "maxGuests": 0,
    "price": 0,
    "__v": 0,
    "description": "",
    "photos": [],
    "rooms": [],
    "reviews": []
  };
  rating: number = 0;

  constructor(private indexPageService: IndexPageService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const placeId = this.route.snapshot.paramMap.get('id');
    if (placeId) {
      this.indexPageService.getPlace(placeId).subscribe({
        next: (res: any) => {
          this.place = new PlaceModel(res.data);
          this.rating = parseFloat(this.place.rating);
          this.getReviews();
        },
        error: (error) => {
          console.error(error);
        }
      });
    }
  }

  getReviews(): void {
    this.indexPageService.getReviews(this.place._id).subscribe({
      next: (res: any) => {
        this.place.reviews = new ReviewsList(res.data).reviews;
      },
      error: (error) => {
        console.error(error);
      }
    });
  }
}
