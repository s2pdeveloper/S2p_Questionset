import { Injectable } from '@angular/core';
import { BehaviorSubject, interval, Subscription } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TimerService {
  private totalTime: number = 0;
  private timeRemaining: number = 0;
  private timerRunning = false;
  private timerSubscription: Subscription | null = null;
  private timerSubject = new BehaviorSubject<number>(0);
  timer$ = this.timerSubject.asObservable();

  constructor() {}

  startTimer(durationInMinutes: number) {
    if (!this.timerRunning) {
      this.totalTime = durationInMinutes * 60;
      this.timeRemaining = this.totalTime;
      this.timerRunning = true;
      this.timerSubscription = interval(1000).subscribe(() => {
        if (this.timeRemaining > 0) {
          this.timeRemaining--;
          this.timerSubject.next(this.timeRemaining);
        } else {
          this.stopTimer();
        }
      });
    }
  }

  stopTimer() {
    if (this.timerSubscription) {
      this.timerSubscription.unsubscribe();
      this.timerRunning = false;
    }
  }

  resetTimer() {
    this.stopTimer();
    this.timeRemaining = this.totalTime;
    this.timerSubject.next(this.timeRemaining);
  }
}