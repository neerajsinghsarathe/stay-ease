import {Component} from '@angular/core';
import {User, UserModel} from '../../models/user.model';
import {Router} from '@angular/router';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {FormsModule} from '@angular/forms';
import {AccountPageService} from '../account-page/account-page.service';
import {ToastService} from '../../helpers/toast/toast.service';
import {SpinnerComponent} from '../../helpers/spinner/spinner.component';

@Component({
  selector: 'app-profile-page',
  standalone: true,
  imports: [
    DialogModule,
    InputTextModule,
    FormsModule,
    SpinnerComponent
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
  loading: boolean = false;

  constructor(private router: Router, private accountService: AccountPageService, private toastService: ToastService) {
    this.loading = true;
    this.accountService.getUserDetails().subscribe({
      next: (response: any) => {
        this.user = new UserModel(response.data);
        this.loading = false;
        if (this.user.id === 0) {
          this.goToLoginPage();
          throw new Error('User not found');
        }
      },
      error: (error: any) => {
        if(error.status === 401) {
          this.goToLoginPage();
          return;
        }
        if (error === 'User not found') {
          this.goToLoginPage();
          return;
        }
        this.loading = false;
        this.toastService.showError(error.error.data);
      }
    });
  }

  handleLogout() {
    this.goToLoginPage();
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

    let body: any = {
      "userName": this.formData.userName,
      "firstName": this.formData.firstName,
      "lastName": this.formData.lastName,
      "email": this.formData.email,
      "phoneNumber": "",
      "dob": this.user.dob,
      "isActive": this.user.isActive
    }
    body = {
      ...body,
      [this.accountService.userId ? 'userId' : 'ownerId']: this.user.id,
      [this.accountService.userId ? 'userPassword' : 'ownerPassword']: this.formData.password || this.user.password
    };

    this.accountService.updateUserDetails(body).subscribe({
      next: (response: any) => {
        this.toastService.showSuccess('Profile updated successfully');
        if (response.data.userId) {
          this.user = new UserModel(response.data);
        } else {
          this.user = new UserModel(response.data[0]);
        }

        this.showHideEditPageDialog();
      },
      error: (error: any) => {
        if (error.status === 401) {
          this.goToLoginPage();
          return;
        }
        this.toastService.showError(error);
      }
    });
  }

  goToLoginPage() {
    this.router.navigate(['/login']).then(() => localStorage.clear());
  }
}
