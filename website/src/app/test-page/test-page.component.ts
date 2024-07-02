import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject, takeUntil, timer } from 'rxjs';
import { StudentService } from '../services/student.service';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule, HeaderComponent],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css',
})
export class TestPageComponent implements OnDestroy {
  seminarId: string | null = null;
  startButton: boolean = false;
  data: any;

  constructor(
    private zone: NgZone,
    private router: Router,
    private actRoute: ActivatedRoute,
    private studentService: StudentService
  ) {}

  destroy = new Subject();
  questions: any[] = [];

  selectedAnswers: any[] = [];

  timeRemaining: string = '';
  interval: any = null;

  rxjsTimer = timer(1000, 1000);
  timer: number = 0;

  ngOnInit() {
    this.getSetDetails();
  }

  getSetDetails() {
    let params = {
      id: localStorage.getItem('SeminarId'),
    };
    this.studentService.getVisibleSet(params).subscribe((success: any) => {
      console.log('Set Details', success);
      this.data = success?.result?.data;
      this.questions = success?.result?.data?.questions;
      this.selectedAnswers = new Array(this.questions.length).fill('');
    });
  }

  startTest(): void {
    this.startButton = true;
    this.timer = this.data?.duration * 60 * 60;
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

  answerChange(option: any, index: number) {
    this.selectedAnswers[index] = option;
  }
  clearSelection(index: number) {
    this.selectedAnswers[index] = '';
  }

  submit() {
    const answers = this.questions.map((question, index) => {
      return { [question._id]: this.selectedAnswers[index] || '' };
    });

    const payload = {
      studentId: localStorage.getItem('StudentId'),
      seminarId: localStorage.getItem('SeminarId'),
      questionSetId: this.data?._id,
      answers: answers,
    };

    console.log('This is Payload', payload);

    this.studentService.submitTest(payload).subscribe((success: any) => {
      console.log('Submit success', success);

      this.router.navigate(['/result'], {
        queryParams: {
          questionSetId: success?.result?.questionSetId,
        },
      });
    });
  }
}
