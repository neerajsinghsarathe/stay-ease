import {Component, OnInit} from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {HeaderComponent} from './helpers/header/header.component';
import {FooterComponent} from './helpers/footer/footer.component';
import {CommonModule} from '@angular/common';
import {ToastComponent} from './helpers/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'stay-ease';

  showHeader!: boolean;
  showFooter!: boolean;
  isLoginOrRegisterPage!: boolean;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events.subscribe((event: any) => {
       this.isLoginOrRegisterPage = event.url?.includes('/login') || event.url === '/register';
      this.showHeader = !this.isLoginOrRegisterPage;
      this.showFooter = !this.isLoginOrRegisterPage;
    });
  }

}
