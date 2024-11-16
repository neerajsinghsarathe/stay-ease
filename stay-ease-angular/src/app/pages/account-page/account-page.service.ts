import { Injectable } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Observable, observeOn} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountPageService {
  private readonly userId: string;

  constructor(private httpService: HttpService) {
    const user = this.httpService.getUser();
    this.userId = user ? JSON.parse(user).userId : '';
  }

  getUserDetails() {
    if (!this.userId) {
      return new Observable(observeOn => observeOn.error('User not found'));
    }
    return this.httpService.get(`/user/${this.userId}`, true);
  }

  updateUserDetails(data: any) {
    return this.httpService.put(`/user/${this.userId}`, data, true);
  }
}
