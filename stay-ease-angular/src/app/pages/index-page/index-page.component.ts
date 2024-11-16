import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Place} from '../../models/place.model';
import {PlaceCardComponent} from '../../helpers/place-card/place-card.component';

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
  constructor() {}

  ngOnInit() {

  }

}
