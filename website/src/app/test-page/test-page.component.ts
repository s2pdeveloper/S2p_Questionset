import { CommonModule } from '@angular/common';
import { Component, NgZone, OnDestroy } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject, takeUntil, timer } from 'rxjs';
import { StudentService } from '../services/student.service';
import { HeaderComponent } from '../header/header.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-test-page',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    NgxSpinnerModule,
  ],
  templateUrl: './test-page.component.html',
  styleUrl: './test-page.component.css',
})
export class TestPageComponent implements OnDestroy {
  seminarId: string | null = null;
  studentId: string | null = null;
  startButton: boolean = false;
  data: any;

  constructor(
    private zone: NgZone,
    private router: Router,
    private studentService: StudentService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService
  ) {}

  destroy = new Subject();
  questions: any[] = [];

  selectedAnswers: any[] = [];

  timeRemaining: string = '';
  interval: any = null;

  rxjsTimer = timer(1000, 1000);
  timer: number = 0;

  ngOnInit() {
    this.seminarId = localStorage.getItem('SeminarId');
    this.studentId = localStorage.getItem('StudentId');
    this.getSetDetails();
  }

  getSetDetails() {
    let params = {
      id: this.seminarId,
    }; 
    this.spinner.show();
    this.studentService.getVisibleSet(params).subscribe((success: any) => {
     
      this.data = success?.result?.data;
      this.questions = success?.result?.data?.questions;
      this.selectedAnswers = new Array(this.questions.length).fill('');
      this.spinner.hide();
    });
  }

  startTest(): void {
    this.startButton = true;
    this.timer = this.data?.duration * 60;
    this.startTimer();
  }

  ngOnDestroy(): void {
    this.destroy.next('');
    this.destroy.complete();
  }

  startTimer() {
    const hours = Math.floor(this.timer / 3600);
    const minutes = Math.floor((this.timer % 3600) / 60);
    const seconds = this.timer % 60;
    this.timeRemaining = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${
      seconds < 10 ? '0' + seconds : seconds
    }`;

    this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(() => {
      this.zone.run(() => {
        this.timer = this.timer - 1;
        const hours = Math.floor(this.timer / 3600);
        const minutes = Math.floor((this.timer % 3600) / 60);
        const seconds = this.timer % 60;
        this.timeRemaining = `${hours}:${
          minutes < 10 ? '0' + minutes : minutes
        }:${seconds < 10 ? '0' + seconds : seconds}`;

        if (this.timer === 0) {
          
          this.submit();
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

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  submit() {
    const answers = this.questions.map((question, index) => {
      return { [question._id]: this.selectedAnswers[index] || '' };
    });
    0;

    const payload = {
      studentId: this.studentId,
      seminarId: this.seminarId,
      questionSetId: this.data?._id,
      answers: answers,
    };

    

    this.studentService.submitTest(payload).subscribe((success: any) => {
   

      this.router.navigate(['default/result'], {
        queryParams: {
          questionSetId: this.data?._id,
        },
      });
    });
  }
}
