import {Injectable, signal, WritableSignal} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  showHeader: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  showFooter: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }

  public enableHeaderAndFooter() {
    this.showHeader.next(true);
    this.showFooter.next(true);
  }

  public disableHeaderAndFooter() {
    this.showHeader.next(false);
    this.showFooter.next(false);
  }

}
