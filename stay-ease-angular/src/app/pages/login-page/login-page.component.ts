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
    email: '',
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
          this.toastService.showSuccess('Login successful');
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
    if (this.registerFormData.email === '' || this.registerFormData.password === '' || this.registerFormData.confirmPassword === '') {
      this.toastService.showError('Please fill in all fields');
      return
    }
    if (this.registerFormData.password !== this.registerFormData.confirmPassword) {
      this.toastService.showError('Passwords do not match');
      return
    }
    this.loginPageService.register(this.registerFormData).subscribe({
      next: (response: any) => {
        if (response.status) {
          this.toastService.showSuccess('Registration successful');
          this.router.navigate(['/']);
        } else {
          this.toastService.showError('Registration failed');
        }
      },
      error: (error: any) => {
        this.toastService.showError('Registration failed');
      }
    });
  }
}
