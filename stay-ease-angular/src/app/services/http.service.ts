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

  get(url: string) {
    return this.http.get(url);
  }

  post(url: string, data: any) {
    return this.http.post(url, data);
  }

  put(url: string, data: any) {
    return this.http.put(url, data);
  }

  delete(url: string) {
    return this.http.delete(url);
  }

  patch(url: string, data: any) {
    return this.http.patch(url, data);
  }
}
