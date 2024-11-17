import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Place, PlaceModelList} from '../../models/place.model';
import {PlaceCardComponent} from '../../helpers/place-card/place-card.component';
import {IndexPageService} from './index-page.service';

@Component({
  selector: 'app-index-page',
  standalone: true,
  imports: [
    RouterLink,
    PlaceCardComponent
  ],
  templateUrl: './index-page.component.html',
  styleUrl: './index-page.component.css'
})
export class IndexPageComponent implements OnInit {
  places: Place[] = [];
  constructor(private indexPageService: IndexPageService) {}

  ngOnInit() {
    this.indexPageService.getPlaces().subscribe({
      next: (res: any) => {
        const placesList = new PlaceModelList(res.data);
        this.places = placesList.places;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

}
