import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';

interface ToastMessage {
  severity: string;
  summary: string;
  detail: string;
}

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  message: BehaviorSubject<ToastMessage> = new BehaviorSubject({
    severity: '',
    summary: '',
    detail: ''
  });

  constructor() { }

  public showSuccess(message: string) {
    this.message.next({severity: 'success', summary: 'Success', detail: message});
  }

  public showError(message: string) {
    this.message.next({severity: 'error', summary: 'Error', detail: message});
  }

  public showInfo(message: string) {
    this.message.next({severity: 'info', summary: 'Info', detail: message});
  }

  public showWarning(message: string) {
    this.message.next({severity: 'warn', summary: 'Warning', detail: message});
  }

}
