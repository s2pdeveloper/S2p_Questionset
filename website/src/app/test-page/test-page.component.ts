import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil, timer } from 'rxjs';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css',
})
export class TestPageComponent implements OnDestroy {
  constructor(private zone: NgZone, private router: Router) {}
  destroy = new Subject();
  questions = [
    {
      text: 'What is the capital of France?',
      options: ['Paris', 'London', 'Berlin', 'Madrid'],
      answer: '',
    },
    {
      text: 'Which planet is known as the Red Planet?',
      options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
      answer: '',
    },
    {
      text: 'Who wrote "Hamlet"?',
      options: ['Shakespeare', 'Dante', 'Homer', 'Cervantes'],
      answer: '',
    },
    {
      text: 'What is the largest ocean on Earth?',
      options: ['Pacific', 'Atlantic', 'Indian', 'Arctic'],
      answer: '',
    },
    {
      text: 'What is the speed of light?',
      options: ['300,000 km/s', '150,000 km/s', '450,000 km/s', '600,000 km/s'],
      answer: '',
    },
    {
      text: 'Who painted the Mona Lisa?',
      options: ['Da Vinci', 'Van Gogh', 'Picasso', 'Rembrandt'],
      answer: '',
    },
    {
      text: 'What is the chemical symbol for gold?',
      options: ['Au', 'Ag', 'Pb', 'Fe'],
      answer: '',
    },
    {
      text: 'Who discovered penicillin?',
      options: ['Fleming', 'Curie', 'Einstein', 'Newton'],
      answer: '',
    },
    {
      text: 'What is the tallest mountain in the world?',
      options: ['Everest', 'K2', 'Kangchenjunga', 'Lhotse'],
      answer: '',
    },
    {
      text: 'What is the smallest prime number?',
      options: ['2', '1', '3', '5'],
      answer: '',
    },
  ];

  timeRemaining: string = '';
  interval: any = null;

  rxjsTimer = timer(1000, 1000);
  timer: number = 30 * 60;

  ngOnInit() {
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.destroy.next('');
    this.destroy.complete();
  }

  startTimer() {
    const minutes = Math.floor(this.timer / 60);
    const seconds = this.timer % 60;
    this.timeRemaining = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.zone.run(() => {
        this.timer = this.timer - 1;
        const minutes = Math.floor(this.timer / 60);
        const seconds = this.timer % 60;
        this.timeRemaining = `${minutes}:${
          seconds < 10 ? '0' + seconds : seconds
        }`;

        if (this.timer === 0) {
          this.destroy.next('');
          this.destroy.complete();
        }
      });
    });
  }
  answerChange(ans, i: number) {
    this.questions[i].answer = ans;
  }
  submit() {
    console.log(this.questions);
    this.router.navigate(['/report']);
  }
}