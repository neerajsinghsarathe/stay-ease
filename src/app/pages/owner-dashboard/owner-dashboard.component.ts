import {Component} from '@angular/core';

@Component({
  selector: 'app-owner-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './owner-dashboard.component.html',
  styleUrl: './owner-dashboard.component.css'
})
export class OwnerDashboardComponent {
  ownerData: any = [
    {'name': 'Total Accommodations', 'count': 2},
    {'name': 'Total Bookings', 'count': 2},
    {'name': 'Total Revenue', 'count': 2, 'currency': true}
  ];

}
