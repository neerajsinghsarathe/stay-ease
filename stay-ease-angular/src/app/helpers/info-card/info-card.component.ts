import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PlaceImgComponent} from '../place-img/place-img.component';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [
    RouterLink,
    PlaceImgComponent
  ],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @Input() place!: {
    _id: string,
    title: string,
    description: string,
    photos: string[],
  };
}
