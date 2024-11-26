import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {NgClass, NgIf} from '@angular/common';
import {ActivatedRoute, NavigationEnd, Router, RouterLink} from '@angular/router';
import {SearchBarComponent} from '../search-bar/search-bar.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgClass,
    RouterLink,
    NgIf,
    SearchBarComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  showSearchBar: boolean = true;
  hasShadow: boolean = true;
  user: any = {};

  constructor(private router: Router, private cdRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.showSearchBar = !event.url.includes('/account');
        this.hasShadow = !event.url.includes('/account');
        this.cdRef.detectChanges();
      }
    });
  }
}
