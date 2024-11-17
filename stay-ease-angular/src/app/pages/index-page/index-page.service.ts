import { Injectable } from '@angular/core';
import {HttpService} from '../../services/http.service';

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

  getPlace(id: string) {
    return this.httpService.get(this.domainUrl + '/Hotel/' + id);
  }
}
