import { Injectable } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginPageService {
  private readonly domainUrl: string;

  constructor(private httpService: HttpService) {
    this.domainUrl = this.httpService.getDomainUrl();
  }

  login(loginFormData: { email: string, password: string }) {
    return this.httpService.post(`${this.domainUrl}/Login/user`, loginFormData).pipe(tap((response: any) => {
      if (response.status) {
        this.httpService.setToken(response.token['token1']);
        this.httpService.setUser(JSON.stringify(response.data));
      }
    }));
  }

  register(registerFormData: any) {
    return this.httpService.post(`${this.domainUrl}/user`, registerFormData);
  }

  adminLogin(loginFormData: { password: string; email: string }) {
    return this.httpService.post(`${this.domainUrl}/Login/owner`, loginFormData).pipe(tap((response: any) => {
      if (response.status) {
        this.httpService.setToken(response.token['token1']);
        this.httpService.setUser(JSON.stringify(response.data));
      }
    }));
  }

  registerAdmin(body: any) {
    return this.httpService.post(`${this.domainUrl}/Owner`, body);
  }
}
