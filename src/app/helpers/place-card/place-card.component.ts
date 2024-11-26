import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {Place} from '../../models/place.model';

@Component({
  selector: 'app-place-card',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.css'
})
export class PlaceCardComponent {
  @Input() place!: Place;
}
