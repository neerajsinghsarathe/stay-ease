import {Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {ToastService} from '../../helpers/toast/toast.service';
import {AppService} from '../../app.service';

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
export class LoginPageComponent {
  formData = {
    email: '',
    password: ''
  };

  constructor(private toastService: ToastService, private appService: AppService) {
  }

  handleFormSubmit() {
    if (this.formData.email === '' || this.formData.password === '') {
      this.toastService.showError('Please fill in all fields');
      return
    }
    this.appService.enableHeader();
    // TODO: Handle form submission
  }

}
