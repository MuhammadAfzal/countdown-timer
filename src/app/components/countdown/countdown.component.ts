import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountdownService } from 'src/app/services/countdown.service';

@Component({
  selector: 'app-countdown',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './countdown.component.html',
  styleUrls: ['./countdown.component.scss'],
})
export class CountdownComponent implements OnInit {
  countdownService = inject(CountdownService);
  loading = signal(true);
  error = signal(false);

  ngOnInit() {
    this.countdownService.startCountdown({
      onSuccess: () => {
        this.loading.set(false);
        this.error.set(false);
      },
      onError: () => {
        this.loading.set(false);
        this.error.set(true);
      },
    });
  }
}
