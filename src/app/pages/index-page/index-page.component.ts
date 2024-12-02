import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {Place, PlaceModelList} from '../../models/place.model';
import {PlaceCardComponent} from '../../helpers/place-card/place-card.component';
import {IndexPageService} from './index-page.service';
import {SpinnerComponent} from '../../helpers/spinner/spinner.component';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [
    RouterLink,
    PlaceCardComponent,
    SpinnerComponent
  ],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent implements OnInit {
  places: Place[] = [];
  isLoading!: boolean;
  constructor(private indexPageService: IndexPageService, private route: ActivatedRoute) {}

  ngOnInit() {
    this.isLoading = true;
    this.route.queryParams.subscribe(params => {
      if (Object.keys(params).length > 0) {
        const searchData = {
          searchText: params['q'] ?? '',
          pincode: params['pincode'] ?? '',
          checkIn: params['cin'] ?? '',
          checkOut: params['cout'] ?? '',
          capacity: params['count'] ?? ''
        };
        this.searchPlaces(searchData);
      } else {
        this.getPlaces();
      }
    });
  }

  searchPlaces(query: any) {
    this.isLoading = true;
    if (query.searchText) {
      this.indexPageService.searchPlacesByName(query.searchText).subscribe({
        next: (res: any) => {
          if (query.checkIn && query.checkOut && query.capacity) {
            const location = res.data.find((place: any) => place.name.includes(query.searchText) || place.address.includes(query.searchText) || place.pinCode.toString().includes(query.searchText) || place.city.includes(query.searchText) || place.state.includes(query.searchText));
            if (location) {
              query.country = location.country;
              query.pincode = location.pinCode;
              this.indexPageService.searchPlaces(query).subscribe({
                next: (res: any) => {
                  if (res.length) {
                    const placesList = new PlaceModelList(res);
                    this.places = placesList.places;
                  } else {
                    this.places = [];
                  }
                },
                error: (error: any) => {
                  this.places = [];
                },
                complete: () => {
                  this.isLoading = false;
                }
              });
            } else {
              this.places = [];
            }
          } else {
            const placesList = new PlaceModelList(res.data);
            this.places = placesList.places;
          }
        },
        error: (error: any) => {
          this.places = [];
          this.isLoading = false;
        },
        complete: () => {
          this.isLoading = false;
        }
      });
      return;
    } else {
      this.isLoading = false;
      this.getPlaces();
    }
  }

  getPlaces() {
    this.isLoading = true;
    this.indexPageService.getPlaces().subscribe({
      next: (res: any) => {
        const placesList = new PlaceModelList(res.data);
        this.places = placesList.places;
      },
      error: (error: any) => {
        this.places = [];
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

}
