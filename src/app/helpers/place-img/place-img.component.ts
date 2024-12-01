import {Component, Input} from '@angular/core';
import {JsonPipe, NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-place-img',
  standalone: true,
  imports: [
    NgClass
  ],
  template: `@if (place.photos?.length) {
    <img [src]="place.photos[index]?.imageUrl" alt="" [ngClass]="className || 'object-cover'" />
    }`,
  styleUrl: './place-img.component.css'
})
export class PlaceImgComponent {
  @Input() place!: { _id: number; title: string; description: string, photos: any[] };
  @Input() index: number = 0;
  @Input() className: string | null = null;

}
