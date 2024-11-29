import {Component, input} from '@angular/core';
import {ProgressSpinnerModule} from 'primeng/progressspinner';

@Component({
  selector: 'app-spinner',
  standalone: true,
  imports: [
    ProgressSpinnerModule
  ],
  templateUrl: './spinner.component.html',
  styleUrl: './spinner.component.css'
})
export class SpinnerComponent {
  isLoading = input(false);
}
