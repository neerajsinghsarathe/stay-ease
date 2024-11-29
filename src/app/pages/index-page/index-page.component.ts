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
      if (params['q']) {
        this.searchPlaces(params['q']);
      } else {
        this.getPlaces();
      }
    });
  }

  searchPlaces(query: string) {
    this.indexPageService.searchPlaces(query).subscribe({
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

  getPlaces() {
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
