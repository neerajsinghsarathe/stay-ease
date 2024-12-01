import {Component} from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-navigation-tabs',
  standalone: true,
  imports: [
    RouterLink,
    NgClass,
    RouterLinkActive
  ],
  templateUrl: './navigation-tabs.component.html',
  styleUrl: './navigation-tabs.component.css'
})
export class NavigationTabsComponent {
  classes = 'flex justify-center mx-10 md:mx-0 gap-1 py-2 px-6 rounded-full bg-gray-100';
  activeClass = 'bg-primary text-white';
  role = 'user';

  constructor() {
    localStorage.getItem('role') === 'admin' ? this.role = 'admin' : this.role = 'user';
  }
}
