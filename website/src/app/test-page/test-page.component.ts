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
import { TimerService } from '../services/timer.service';
import { ToastrService } from 'ngx-toastr';

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
  timeRemaining: string = '';
  durationInMinutes: number = 5; // Set your desired duration here

  seminarId: string | null = null;
  studentId: string | null = null;
  startButton: boolean = false;
  data: any;
  isTestSubmitted: boolean = false;
  constructor(
    private zone: NgZone,
    private router: Router,
    private studentService: StudentService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService,
    private timerService: TimerService,
    private toast: ToastrService
  ) {}

  destroy = new Subject();
  questions: any[] = [];
  letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  selectedAnswers: any[] = [];

  // timeRemaining: string = '';
  interval: any = null;

  rxjsTimer = timer(1000, 1000);
  timer: number = 0;

  ngOnInit() {
    this.seminarId = localStorage.getItem('SeminarId');
    this.studentId = localStorage.getItem('StudentId');
    this.timerService.timer$.subscribe((time) => {
      this.timeRemaining = this.formatTime(time);
      if (time == 0) {
        this.submit();
      }
    });
    // this.timer = this.data?.duration * 60;
    this.getSetDetails();
  }

  startTimerNew(time: any) {
    this.timerService.startTimer(time);
  }

  formatTime(timeInSeconds: number): string {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  getSetDetails() {
    let params = {
      id: this.seminarId,
    };
    this.spinner.show();
    this.studentService.getVisibleSet(params).subscribe(
      (success: any) => {
        this.data = success?.result?.data;
        this.questions = success?.result?.data?.questions;
        this.selectedAnswers = new Array(this.questions.length).fill('');
        // let activeTimerValue = localStorage.getItem('activeQueSetTime');
        // if (activeTimerValue) {
        //   this.convertToMinutes(activeTimerValue);
        // } else {
        //   this.timer = this.data?.duration * 60;
        // }
        this.startTimerNew(this.data?.duration);

        let activeQueSet = localStorage.getItem('activeQueSet');
        if (activeQueSet) {
          this.selectedAnswers = JSON.parse(activeQueSet);
        }
        let isTestStarted = localStorage.getItem('isTestStarted');

        if (isTestStarted) {
          this.startButton = isTestStarted === 'true' ? true : false;
        }

        this.spinner.hide();
      },
      (error: any) => {
        this.spinner.hide();
        this.toast.warning(error.error);
      }
    );
  }

  convertToMinutes(time) {
    let [hours, minutes, seconds] = time.split(':').map(Number);
    minutes = minutes * 60;

    this.timer = minutes + seconds;
  }

  startTest(): void {
    this.startButton = true;
    // this.startTimer();
    localStorage.setItem('isTestStarted', 'true');
  }

  ngOnDestroy(): void {
    // if(!this.isTestSubmitted){

    //   localStorage.setItem('activeQueSetTime', this.timeRemaining);
    // }

    this.destroy.next('');
    this.destroy.complete();
  }

  // startTimer() {
  //   const hours = Math.floor(this.timer / 3600);
  //   const minutes = Math.floor((this.timer % 3600) / 60);
  //   const seconds = this.timer % 60;
  //   this.timeRemaining = `${hours}:${minutes < 10 ? '0' + minutes : minutes}:${
  //     seconds < 10 ? '0' + seconds : seconds
  //   }`;

  //   this.rxjsTimer.pipe(takeUntil(this.destroy)).subscribe(() => {
  //     this.zone.run(() => {
  //       this.timer = this.timer - 1;
  //       const hours = Math.floor(this.timer / 3600);
  //       const minutes = Math.floor((this.timer % 3600) / 60);
  //       const seconds = this.timer % 60;
  //       this.timeRemaining = `${hours}:${
  //         minutes < 10 ? '0' + minutes : minutes
  //       }:${seconds < 10 ? '0' + seconds : seconds}`;

  //       if (this.timer === 0) {
  //         this.submit();

  //         this.destroy.next('');
  //         this.destroy.complete();
  //       }
  //     });
  //   });
  // }

  answerChange(option: any, index: number, ev: any) {
    // console.log(ev.target.checked);

    // return

    let existing = this.selectedAnswers.findIndex((s) => s === option);

    if (!ev.target.checked) {
      this.selectedAnswers.splice(index, 1,'');
      this.setTempData();
      return
    }

    // if (existing != -1) {
    //   this.clearSelection(index);
    //   console.log('existing', existing, this.selectedAnswers);

    //   return;
    // }

    this.selectedAnswers[index] = option;
    this.setTempData();
    console.log('this.selectedAnswers--22', this.selectedAnswers);
  }

  // answerChange(option: any, index: number) {
  //   let existing = this.selectedAnswers.indexOf((s:any) => s === option);

  //   console.log('existing',existing );
  //   console.log('index',index );
  //   console.log('option',option);

  //   // if (existing != -1) {
  //   //   this.clearSelection(index);
  //   // console.log('existing', existing, this.selectedAnswers);

  //   //   return;
  //   // }

  //   // this.selectedAnswers[index] = option;
  //   // this.setTempData();
  //   // console.log('this.selectedAnswers--22', this.selectedAnswers);
  // }

  setTempData() {
    localStorage.setItem('activeQueSet', JSON.stringify(this.selectedAnswers));
  }

  clearSelection(index: number) {
    this.selectedAnswers[index] = '';
  }

  open(content) {
    this.modalService.open(content, { centered: true });
  }

  submit() {
    this.spinner.show();

    if (this.questions.length === 0) {
      return;
    }

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

    this.studentService.submitTest(payload).subscribe(
      (success: any) => {
        localStorage.removeItem('activeQueSet');
        localStorage.removeItem('isTestStarted');
        this.router.navigate(['default/result'], {
          queryParams: {
            questionSetId: this.data?._id,
          },
        });
        this.isTestSubmitted = true;

        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
      }
    );
  }
}
