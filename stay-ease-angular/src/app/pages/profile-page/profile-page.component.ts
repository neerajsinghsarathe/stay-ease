import { Component } from '@angular/core';
import {NavigationTabsComponent} from '../../helpers/navigation-tabs/navigation-tabs.component';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    NavigationTabsComponent
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  user: User = {
    id: 1,
    name: 'John Doe',
    email: 'johndoe@xyz.com',
    password: '',
    profileImg: ''
  };
  pageName: string = 'profile';

  constructor(private router: Router) {
    // this.user = JSON.parse(localStorage.getItem('user'));
  }

  handleLogout() {
    this.router.navigate(['/login']).then(r => localStorage.clear());
  }
}
