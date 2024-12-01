import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {ToastService} from '../../helpers/toast/toast.service';
import {LoginPageService} from './login-page.service';
import {LoaderComponent} from '../../helpers/loader/loader.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [
    FormsModule,
    LoaderComponent
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
  isLoading!: boolean;

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
    this.isLoading = true;
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

    const isAdmin = this.role === 'admin';
    const loginMethod = isAdmin ? 'adminLogin' : 'login';
    const navigateTo = isAdmin ? '/dashboard' : '/';

    this.loginPageService[loginMethod](this.loginFormData).subscribe({
      next: (response: any) => {
        if (response.status) {
          localStorage.setItem('role', this.role || 'user');
          this.router.navigate([navigateTo]);
        } else {
          this.toastService.showError('Invalid email or password');
        }
        this.isLoading = false;
      },
      error: () => {
        this.toastService.showError('Invalid email or password');
        this.isLoading = false;
      }
    });
  }

  register(): void {
    if (Object.values(this.registerFormData).some(field => field === '')) {
      this.toastService.showError('Please fill in all fields');
      this.isLoading = false;
      return;
    }
    if (this.registerFormData.password !== this.registerFormData.confirmPassword) {
      this.toastService.showError('Passwords do not match');
      this.isLoading = false;
      return;
    }

    const {userName, firstName, lastName, email, dateOfBirth} = this.registerFormData;
    let body: any = {userName, firstName, lastName, email, phoneNumber: '', dob: dateOfBirth, isActive: true};

    const isAdmin = this.role === 'admin';
    const idKey = isAdmin ? 'ownerId' : 'userId';
    const passwordKey = isAdmin ? 'ownerPassword' : 'userPassword';
    body = {...body, [idKey]: 0, [passwordKey]: this.registerFormData.password};

    const registerMethod = isAdmin ? 'registerAdmin' : 'register';
    this.loginPageService[registerMethod](body).subscribe({
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
        this.toastService.showError(error.error.data ?? error.error.message);
        this.isLoading = false;
      }
    });
  }

  goToPage(page: string) {
    if (this.role === 'admin') {
      this.router.navigate([`/${page}`], {queryParams: {role: 'admin'}});
    } else {
      this.router.navigate([`/${page}`]);
    }
  }
}
