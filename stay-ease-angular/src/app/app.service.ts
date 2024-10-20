import {Injectable, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  showHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showFooter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public enableHeader() {
    this.showHeader.next(true);
  }

  public disableHeader() {
    this.showHeader.next(false);
  }

}
