import {Component, Input} from '@angular/core';
import {RouterLink} from '@angular/router';
import {PlaceImgComponent} from '../place-img/place-img.component';
import {TagModule} from 'primeng/tag';

@Component({
  selector: 'app-info-card',
  standalone: true,
  imports: [
    PlaceImgComponent,
    TagModule
  ],
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.css'
})
export class InfoCardComponent {
  @Input() place!: {
    _id: number,
    title: string,
    description: string,
    isActive?: boolean,
    photos: string[],
  };
}
