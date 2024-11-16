import { Injectable } from '@angular/core';
import {HttpService} from '../../services/http.service';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
  private readonly domainUrl: string;

  constructor(private httpService: HttpService) {
    this.domainUrl = this.httpService.getDomainUrl();
  }

  login(loginFormData: { email: string, password: string }) {
    return this.httpService.post(`${this.domainUrl}/Login/user`, loginFormData).pipe((response: any) => {
      if (response.status) {
        this.httpService.setToken(response.token);
      }
      return response;
    });
  }

  register(registerFormData: { email: string, password: string}) {
    return this.httpService.post(`${this.domainUrl}/register`, registerFormData);
  }
}
