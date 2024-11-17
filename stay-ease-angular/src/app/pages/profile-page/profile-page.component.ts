import {Component} from '@angular/core';
import {User, UserModel} from '../../models/user.model';
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
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    profileImg: ''
  };
  formData: any = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    profileImg: ''
  };
  viewEditProfileModal: boolean = false;

  constructor(private router: Router, private accountService: AccountPageService, private toastService: ToastService) {
    this.accountService.getUserDetails().subscribe({
      next: (response: any) => {
        this.user = new UserModel(response.data);
        if (this.user.id === 0) {
          this.router.navigate(['/login']);
          throw new Error('User not found');
        }
      },
      error: (error: any) => {
        if (error === 'User not found') {
          this.router.navigate(['/login']);
          return;
        }
        this.toastService.showError(error.error.data);
      }
    });
  }

  handleLogout() {
    this.router.navigate(['/login']).then(r => localStorage.clear());
  }

  showHideEditPageDialog() {
    if (this.user.id === 0) {
      this.toastService.showError('User not found');
      return;
    }
    this.formData = {
      userName: this.user.userName,
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      password: '',
      confirmPassword: '',
      profileImg: this.user.profileImg
    };
    this.viewEditProfileModal = !this.viewEditProfileModal;
  }

  handleEditProfile() {
    if (this.user.id === 0) {
      this.toastService.showError('User not found');
      return;
    }
    if (this.formData.password !== this.formData.confirmPassword) {
      this.toastService.showError('Passwords do not match');
      return;
    }

    const body = {
      "userId": this.user.id,
      "userPassword": this.formData.password || this.user.password,
      "userName": this.formData.userName,
      "firstName": this.formData.firstName,
      "lastName": this.formData.lastName,
      "email": this.formData.email,
      "phoneNumber": "",
      "dob": this.user.dob,
      "isActive": this.user.isActive,

    }

    this.accountService.updateUserDetails(body).subscribe({
      next: (response: any) => {
        this.toastService.showSuccess('Profile updated successfully');
        this.user = new UserModel(response.data);
        this.showHideEditPageDialog();
      },
      error: (error: any) => {
        if (error.status === 401) {
          this.router.navigate(['/login']).then(() => localStorage.clear());
          return;
        }
        this.toastService.showError(error);
      }
    });
  }
}
