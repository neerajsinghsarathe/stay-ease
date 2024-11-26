import {Component, Input} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-perks-widget',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './perks-widget.component.html',
  styleUrl: './perks-widget.component.css'
})
export class PerksWidgetComponent {
  @Input() perks!: string[];
}
