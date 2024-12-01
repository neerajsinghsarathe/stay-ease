import { Injectable } from '@angular/core';
import {HttpService} from '../../services/http.service';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndexPageService {
  private readonly domainUrl: string;

  constructor(private httpService: HttpService) {
    this.domainUrl = this.httpService.getDomainUrl();
  }

  getPlaces() {
    return this.httpService.get(this.domainUrl + '/Hotel');
  }

  getPlace(id: string | number) {
    return this.httpService.get(this.domainUrl + '/Hotel/' + id);
  }

  searchPlaces(query: string) {
    return this.httpService.get(this.domainUrl + '/Hotel/search/' + query);
  }

  getReviews(id: string | number) {
    return this.httpService.get(this.domainUrl + '/reviews/' + id);
  }

  getOwnerData() {
    const userDetails = this.httpService.getUser();
    if (userDetails) {
      const userId = JSON.parse(userDetails).userId ?? JSON.parse(userDetails).ownerId;
      return this.httpService.get(this.domainUrl + '/owner/dashboard/' + userId, true);
    }
    return new Observable(observeOn => observeOn.error('User not found'));
  }
}
