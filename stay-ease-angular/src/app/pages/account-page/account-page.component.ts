import { Component } from '@angular/core';
import {NavigationTabsComponent} from "../../helpers/navigation-tabs/navigation-tabs.component";
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-account-page',
  standalone: true,
  imports: [
    NavigationTabsComponent,
    RouterOutlet
  ],
  templateUrl: './account-page.component.html',
  styleUrl: './account-page.component.css'
})
export class AccountPageComponent {

}
