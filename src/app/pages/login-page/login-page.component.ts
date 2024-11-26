import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Router, RouterLink} from '@angular/router';
import {ToastService} from '../../helpers/toast/toast.service';
import {LoginPageService} from './login-page.service';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    RouterLink
  ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  pageTitle = 'Login';
  loginFormData = {
    email: '',
    password: ''
  };
  registerFormData = {
    userName: '',
    firstName: '',
    lastName: '',
    email: '',
    dateOfBirth: '',
    password: '',
    confirmPassword: ''
  }

  constructor(private router: Router, private toastService: ToastService, private loginPageService: LoginPageService) {
  }

  ngOnInit(): void {
    this.pageTitle = this.router.url === '/login' ? 'Login' : 'Register';
  }

  handleFormSubmit(submissionType: string): void {
    if (submissionType === 'login') {
      this.login();
    } else {
      this.register();
    }
  }

  login(): void {
    if (this.loginFormData.email === '' || this.loginFormData.password === '') {
      this.toastService.showError('Please fill in all fields');
      return
    }

    this.loginPageService.login(this.loginFormData).subscribe({
      next: (response: any) => {
        if (response.status) {
          this.router.navigate(['/']);
        } else {
          this.toastService.showError('Invalid email or password');
        }
      },
      error: (error: any) => {
        this.toastService.showError('Invalid email or password');
      }
    });
  }

  register(): void {
    if (
      this.registerFormData.email === '' ||
      this.registerFormData.password === '' ||
      this.registerFormData.confirmPassword === '' ||
      this.registerFormData.userName === '' ||
      this.registerFormData.firstName === '' ||
      this.registerFormData.lastName === '' ||
      this.registerFormData.dateOfBirth === ''
    ) {
      this.toastService.showError('Please fill in all fields');
      return
    }
    if (this.registerFormData.password !== this.registerFormData.confirmPassword) {
      this.toastService.showError('Passwords do not match');
      return
    }

    const body = {
      "userId": 0,
      "userName": this.registerFormData.userName,
      "firstName": this.registerFormData.firstName,
      "lastName": this.registerFormData.lastName,
      "userPassword": this.registerFormData.password,
      "email": this.registerFormData.email,
      "phoneNumber": "",
      "dob": this.registerFormData.dateOfBirth,
      "isActive": true

    };

    this.loginPageService.register(body).subscribe({
      next: (response: any) => {
        if (!response.status) {
          this.toastService.showError('Registration failed');
          return;
        }

        this.loginFormData.email = this.registerFormData.email;
        this.loginFormData.password = this.registerFormData.password;
        this.login();
      },
      error: (error: any) => {
        this.toastService.showError(error.error.data);
      }
    });
  }
}
