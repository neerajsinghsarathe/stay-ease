import { Injectable } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Observable, observeOn} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountPageService {
  private readonly domainUrl: string;
  private readonly userId: string;

  constructor(private httpService: HttpService) {
    this.domainUrl = this.httpService.getDomainUrl();
    const user = this.httpService.getUser();
    this.userId = user ? JSON.parse(user).userId : '';
  }

  getUserDetails() {
    if (!this.userId) {
      return new Observable(observeOn => observeOn.error('User not found'));
    }
    return this.httpService.get(`${this.domainUrl}/User/${this.userId}`, true);
  }

  updateUserDetails(data: any) {
    return this.httpService.put(`${this.domainUrl}/User/${this.userId}`, data, true);
  }

  bookPlace(data: any) {
    return this.httpService.post(`${this.domainUrl}/createbooking`, data, true);
  }

  getBookings() {
    return this.httpService.get(`${this.domainUrl}/User/bookings/${this.userId}`, true);
  }
}
