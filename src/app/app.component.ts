import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownComponent } from './components/countdown/countdown.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, CountdownComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'countdown-timer';
}
