import { Component } from '@angular/core';
import {NavigationTabsComponent} from '../../helpers/navigation-tabs/navigation-tabs.component';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {Button} from 'primeng/button';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    NavigationTabsComponent,
    DialogModule,
    InputTextModule,
    Button,
    FormsModule
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
  formData: any = {
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImg: ''
  };
  viewEditProfileModal: boolean = false;

  constructor(private router: Router) {
    // this.user = JSON.parse(localStorage.getItem('user'));
  }

  handleLogout() {
    this.router.navigate(['/login']).then(r => localStorage.clear());
  }

  showHideEditPageDialog() {
    this.viewEditProfileModal = !this.viewEditProfileModal;
  }

  handleEditProfile() {

  }
}
