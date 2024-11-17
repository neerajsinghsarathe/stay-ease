import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  getDomainUrl() {
    return 'https://stayeaseapi.azure-api.net';
  }

  getToken() {
    return localStorage.getItem('token');
  }

  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getUser() {
    return localStorage.getItem('user');
  }

  setUser(user: string) {
    localStorage.setItem('user', user);
  }

  get(url: string, requireToken: boolean = false) {
    if (requireToken) {
      const token = this.getToken();
      if (token) {
        return this.http.get(url, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });
      }
    }
    return this.http.get(url);
  }

  post(url: string, data: any, requireToken: boolean = false) {
    if (requireToken) {
      return this.http.post(url, data, {headers: {Authorization: `Bearer ${this.getToken()}`}});
    }
    return this.http.post(url, data);
  }

  put(url: string, data: any, requireToken: boolean = false) {
    if (requireToken) {
      return this.http.put(url, data, {headers: {Authorization: `Bearer ${this.getToken()}`}});
    }
    return this.http.put(url, data);
  }

  delete(url: string, requireToken: boolean = false) {
    if (requireToken) {
      return this.http.delete(url, {headers: {Authorization: `Bearer ${this.getToken()}`}});
    }
    return this.http.delete(url);
  }

  patch(url: string, data: any, requireToken: boolean = false) {
    if (requireToken) {
      return this.http.patch(url, data, {headers: {Authorization: `Bearer ${this.getToken()}`}});
    }
    return this.http.patch(url, data);
  }
}
