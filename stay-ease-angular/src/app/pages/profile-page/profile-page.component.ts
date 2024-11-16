import { Component } from '@angular/core';
import {User} from '../../models/user.model';
import {Router} from '@angular/router';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {AccountPageService} from '../account-page/account-page.service';
import {ToastService} from '../../helpers/toast/toast.service';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    DialogModule,
    InputTextModule,
    FormsModule
  ],
  templateUrl: './profile-page.component.html',
  styleUrl: './profile-page.component.css'
})
export class ProfilePageComponent {
  user: User = {
    id: 0,
    name: '',
    email: '',
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

  constructor(private router: Router, private accountService: AccountPageService, private toastService: ToastService) {
    this.accountService.getUserDetails().subscribe({
      next: (response: any) => {
        this.user = response.data;
        if(this.user.id === 0) {
          this.router.navigate(['/login']);
          throw new Error('User not found');
        }
      },
      error: (error: any) => {
        if(error === 'User not found') {
          this.router.navigate(['/login']);
          return;
        }
        this.toastService.showError(error);
      }
    });
  }

  handleLogout() {
    this.router.navigate(['/login']).then(r => localStorage.clear());
  }

  showHideEditPageDialog() {
    if(this.user.id === 0) {
      this.toastService.showError('User not found');
      return;
    }
    this.viewEditProfileModal = !this.viewEditProfileModal;
  }

  handleEditProfile() {
    if(this.user.id === 0) {
      this.toastService.showError('User not found');
      return;
    }
    if(this.formData.password !== this.formData.confirmPassword) {
      this.toastService.showError('Passwords do not match');
      return;
    }
    this.user = {
      ...this.user,
      ...this.formData
    };
    this.accountService.updateUserDetails(this.user).subscribe({
      next: (response: any) => {
        this.toastService.showSuccess('Profile updated successfully');
        this.user = response.data;
        this.showHideEditPageDialog();
      },
      error: (error: any) => {
        this.toastService.showError(error);
      }
    });
  }
}
