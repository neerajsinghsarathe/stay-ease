import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './helpers/header/header.component';
import {FooterComponent} from './helpers/footer/footer.component';
import {SpinnerComponent} from './helpers/spinner/spinner.component';
import {CommonModule} from '@angular/common';
import {AppService} from './app.service';
import {ToastComponent} from './helpers/toast/toast.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, SpinnerComponent, ToastComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'stay-ease-angular';
  showHeader!: boolean;
  showFooter!: boolean;

  constructor(private appService: AppService, private cdRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.appService.showHeader.subscribe((showHeader: any) => {
      this.showHeader = showHeader;
      this.cdRef.detectChanges();
    });

    this.appService.showFooter.subscribe((showFooter: any) => {
      this.showFooter = showFooter;
      this.cdRef.detectChanges();
    });
  }

}
