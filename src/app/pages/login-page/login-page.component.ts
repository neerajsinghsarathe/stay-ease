import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
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
  role = 'user';
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

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private toastService: ToastService,
    private loginPageService: LoginPageService) {

    this.route.queryParams.subscribe(params => {
      if (params['role'] === 'admin') {
        this.role = 'admin';
      }
    });
  }

  ngOnInit(): void {
    this.pageTitle = this.router.url.includes('/login') ? 'Login' : 'Register';
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

    if(this.role === 'admin') {
      this.loginPageService.adminLogin(this.loginFormData).subscribe({
        next: (response: any) => {
          if (response.status) {
            this.router.navigate(['/dashboard']);
          } else {
            this.toastService.showError('Invalid email or password');
          }
        },
        error: (error: any) => {
          this.toastService.showError('Invalid email or password');
        }
      });
    } else {
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

    let body: any = {
      "userName": this.registerFormData.userName,
      "firstName": this.registerFormData.firstName,
      "lastName": this.registerFormData.lastName,
      "email": this.registerFormData.email,
      "phoneNumber": "",
      "dob": this.registerFormData.dateOfBirth,
      "isActive": true
    };

    const idKey = this.role === 'admin' ? 'ownerId' : 'userId';
    const passwordKey = this.role === 'admin' ? 'ownerPassword' : 'userPassword';
    body = {...body, [idKey]: 0, [passwordKey]: this.registerFormData.password};

    if (this.role === 'admin') {
      this.loginPageService.registerAdmin(body).subscribe({
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
    } else {
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
}
