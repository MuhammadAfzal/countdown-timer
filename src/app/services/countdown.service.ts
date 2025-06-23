import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval, of, Subscription } from 'rxjs';
import { DeadlineResponse } from '../interfaces/deadline-response.interface';

@Injectable({ providedIn: 'root' })
export class CountdownService {
  private http = inject(HttpClient);
  private countdownSub = new Subscription();

  private _remainingSeconds = signal(0);
  remainingSeconds = this._remainingSeconds.asReadonly();

  private started = false;

  startCountdown(options?: { onSuccess?: () => void; onError?: () => void }) {
    if (this.started) return;
    this.started = true;

    // of({ remainingSeconds: 90 }) // used for testing

    this.http.get<DeadlineResponse>('/api/deadline').subscribe({
      next: (res) => {
        this._remainingSeconds.set(res.remainingSeconds);
        options?.onSuccess?.();

        this.countdownSub = interval(1000).subscribe(() => {
          const current = this._remainingSeconds();
          if (current > 0) {
            this._remainingSeconds.set(current - 1);
          } else {
            this.stopCountdown();
          }
        });
      },
      error: (err) => {
        console.error('Deadline fetch failed:', err);
        this._remainingSeconds.set(0);
        options?.onError?.();
      },
    });
  }

  stopCountdown() {
    this.countdownSub.unsubscribe();
    this.started = false;
  }
}
