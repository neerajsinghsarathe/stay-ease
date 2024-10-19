import {Component, CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './helpers/header/header.component';
import {FooterComponent} from './helpers/footer/footer.component';
import {SpinnerComponent} from './helpers/spinner/spinner.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, FooterComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stay-ease-angular';
}
