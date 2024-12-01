import { Injectable } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Observable, observeOn} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountPageService {
  private readonly domainUrl: string;
  public readonly userId: string;
  public readonly ownerId: string;

  constructor(private httpService: HttpService) {
    this.domainUrl = this.httpService.getDomainUrl();
    const user = this.httpService.getUser();
    this.userId = user ? JSON.parse(user).userId: '';
    this.ownerId = user ? JSON.parse(user).ownerId: '';
  }

  getUserDetails() {
    if (this.userId) {
      return this.httpService.get(`${this.domainUrl}/User/${this.userId}`, true);
    } else {
      return this.httpService.get(`${this.domainUrl}/Owner/${this.ownerId}`, true);
    }
  }

  updateUserDetails(data: any) {
    if(this.userId) {
      return this.httpService.put(`${this.domainUrl}/User/${this.userId}`, data, true);
    } else {
      return this.httpService.put(`${this.domainUrl}/Owner/${this.ownerId}`, data, true);
    }
  }

  bookPlace(data: any) {
    return this.httpService.post(`${this.domainUrl}/createbooking`, data, true);
  }

  getBookings() {
    return this.httpService.get(`${this.domainUrl}/User/bookings/${this.userId}`, true);
  }

  updateBookingStatus(bookingId: string | number, bookingData: any) {
    return this.httpService.put(`${this.domainUrl}/owner/updatebooking/${this.userId ?? this.ownerId}/${bookingId}`, bookingData, true);
  }

  getAccommodations() {
    return this.httpService.get(`${this.domainUrl}/Owner/Hotels/${this.ownerId}`, true);
  }
}
