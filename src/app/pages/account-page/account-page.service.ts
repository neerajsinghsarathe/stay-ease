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

  getOwnerId() {
    return this.ownerId;
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

  getAllCountries() {
    return this.httpService.get(`${this.domainUrl}/countries`);
  }

  getAllStates() {
    return this.httpService.get(`${this.domainUrl}/states`);
  }

  getAllCities() {
    return this.httpService.get(`${this.domainUrl}/cities`);
  }

  getAllZipCodes() {
    return this.httpService.get(`${this.domainUrl}/pincodes`);
  }

  getStatesByCountry(countryId: string) {
    return this.httpService.get(`${this.domainUrl}/states/${countryId}`);
  }

  getCitiesByState(stateId: string) {
    return this.httpService.get(`${this.domainUrl}/cities/${stateId}`);
  }

  getStateAndCityByZipCode(zipCode: string) {
    return this.httpService.get(`${this.domainUrl}/pincode/${zipCode}`);
  }



  checkAvailability(data: any) {
    return this.httpService.get(`${this.domainUrl}/Hotel/${data.hotelId}/Rooms/availability?checkInDate=${data.checkIn}&checkOutDate=${data.checkOut}&capacity=${data.capacity}`, true)
  }

  postReview(data: any) {
    data = {...data, UserID: this.userId, ReviewDate: new Date().toISOString()};
    return this.httpService.post(`${this.domainUrl}/postreview`, data, true);
  }
}
