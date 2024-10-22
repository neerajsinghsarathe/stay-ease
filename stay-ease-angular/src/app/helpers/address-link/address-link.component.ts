import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-address-link',
  standalone: true,
  imports: [],
  templateUrl: './address-link.component.html',
  styleUrl: './address-link.component.css'
})
export class AddressLinkComponent {
  @Input() placeAddress!: string;
  @Input() className: string = 'my-3 block';

  get computedClassName(): string {
    return `${this.className} flex gap-1 font-semibold underline`;
  }
}
