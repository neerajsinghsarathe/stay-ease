import {Component, Input} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-place-img',
  standalone: true,
  imports: [
    NgClass,
    NgIf
  ],
  template: `<img *ngIf="place.photos?.length" [src]="place.photos[index]" alt="" [ngClass]="className || 'object-cover'" />`,
  styleUrl: './place-img.component.css'
})
export class PlaceImgComponent {
  @Input() place!: { _id: number; title: string; description: string, photos: string[] };
  @Input() index: number = 0;
  @Input() className: string | null = null;

}
