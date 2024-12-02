import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';
import {IndexPageService} from '../../pages/index-page/index-page.service';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.css'
})
export class SearchBarComponent {
  searchText: any;
  checkInDate: any;
  checkOutDate: any;
  guestCount: any;
  locations: any;

  constructor(private router: Router, private indexPageService: IndexPageService) {
    this.indexPageService.getLocations().subscribe((locations: any) => {
      this.locations = locations.data;
    });
  }

  handleSearch($event?: Event) {
    this.router.navigate(['/search'], { queryParams: { q: this.searchText, cin: this.checkInDate, cout: this.checkOutDate, count: this.guestCount } });
  }
}
