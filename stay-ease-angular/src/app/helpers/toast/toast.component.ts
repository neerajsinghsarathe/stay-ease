import {Component, OnInit} from '@angular/core';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {ToastService} from './toast.service';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [
    ToastModule
  ],
  providers: [MessageService],
  template: `<p-toast [life]="1500"></p-toast>`,
  styleUrl: './toast.component.css'
})
export class ToastComponent implements OnInit{

  constructor(private messageService: MessageService, private toastService: ToastService) {}

  ngOnInit(): void {
    this.toastService.message.subscribe(message => {
      if (message.severity !== "" && message.summary !== "" && message.detail !== "") {
        this.messageService.add({severity: message.severity, summary: message.summary, detail: message.detail});
      }
    });
  }
}
