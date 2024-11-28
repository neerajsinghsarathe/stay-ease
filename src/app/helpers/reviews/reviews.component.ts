import {Component, Input} from '@angular/core';
import {Review} from '../../models/place.model';
import {TagModule} from 'primeng/tag';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [
    TagModule,
    DatePipe
  ],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.css'
})
export class ReviewsComponent {
  @Input() reviews: Review[] = [];
  protected readonly Date = Date;
  protected readonly String = String;
}
