import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

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

  constructor(private router: Router) {
  }

  handleSearch($event?: Event) {
    // Add params in the url to search
    this.router.navigate(['/search'], { queryParams: { q: this.searchText } });
  }
}
