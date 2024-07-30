import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { NzProgressModule, NzProgressStatusType } from 'ng-zorro-antd/progress';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { NgxSpinnerService } from 'ngx-spinner';
import { NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-result-page',
  standalone: true,
  imports: [NzProgressModule, HeaderComponent, CommonModule,NgxSpinnerModule],
  templateUrl: './result-page.component.html',
  styleUrl: './result-page.component.css',
})
export class ResultPageComponent implements OnInit {
  constructor(
    private router: Router,
    private studentService: StudentService,
    private actRoute: ActivatedRoute,
    private spinner: NgxSpinnerService,
    private location: Location,
  ) {}

  questionSetId: string | null = null;
  seminarId: string | null = localStorage.getItem('SeminarId');
  resultData: any = null;

  totalStudents: number = 0;
  stuAttempted: number = 0;
  stuNotAttempted: number = 0;
  totalPassed: number = 0;
  totalFailed: number = 0;

  passPercentage: any = 0;
  failPercentage: any = 0;
  attemptPercentage: number = 0;
  notAttemptPercentage: number = 0;
  marksPercent: number = 0;
  questionsPercent: number = 0;

  totalMarks: number = 0;
  passingMarks: number = 0;
  marksObtained: number = 0;

  rank: number = 0;
  status: string = '';

  topStudents: any[] = [];
 
  name:any;
  nameLast:any;

  // totalQuestions: number = 10;
  // questionsAttempted: number = 9;

  ngOnInit(): void {
    this.spinner.show();
    this.actRoute.queryParams.subscribe((params: any) => {
      console.log('Report Params *********', params);
      this.questionSetId = params.questionSetId;
      this.resultData = params.resultData
        ? JSON.parse(params.resultData)
        : null;
      console.log('Result in result page result data', this.resultData);

      if (this.resultData) {
        console.log('this.resultData', this.resultData);

        this.processResultData(this.resultData);
      } else if (this.questionSetId) {
        console.log('this.questionSetId', this.questionSetId);

        this.obtainResults(this.questionSetId);
      }
    });
  }

  obtainResults(setId: string) {
    // console.log("Params in result function", params);
    let payload = {
      questionSetId: setId,
      seminarId: this.seminarId,
      studentId: localStorage.getItem('StudentId'),
    };

    console.log('Obtain result payload', payload);

    this.studentService.getRankedResult(payload).subscribe((success: any) => {
      console.log('Ranked Result Success', success);
      this.totalStudents = success?.totalStudent;
      this.stuAttempted = success?.noOfAttemptedStudent;
      this.stuNotAttempted = success?.noOfUnattemptedStudent;
      this.totalMarks = success?.maxScore;
      this.passingMarks = success?.passingMarks;
      this.totalPassed = success?.noOfPassStudent;
      this.totalFailed = success?.noOfFailStudent;
      this.passPercentage = success?.percentageOfPassStudent;
      this.failPercentage = success?.percentageOfFailStudent;
      this.marksObtained = success?.student?.obtainMarks;
      this.name = success?.student?.studentInfo.firstName;
      this.nameLast=success?.student?.studentInfo.lastName;
      this.rank = success?.student?.rank;
      this.status = success?.student?.status;
      this.topStudents = success?.topStudent;
      this.calculatePercentages();
      this.calculateMarksPercentage();
      // this.calculateQuesAttemptPercentage();
      this.spinner.hide();
    });

  
  }

  processResultData(result: any) {
    console.log('In process result', result);

    this.totalStudents = result?.totalStudent;
    this.stuAttempted = result.noOfAttemptedStudent;
    this.stuNotAttempted = result?.noOfUnattemptedStudent;
    this.totalPassed = result?.noOfPassStudent;
    this.totalFailed = result?.noOfFailStudent;
    this.passPercentage = result?.percentageOfPassStudent;
    this.failPercentage = result?.percentageOfFailStudent;
    this.totalMarks = result?.student?.maxScore;
    this.passingMarks = result?.student?.passingMarks;
    this.name=result?.student?.studentInfo.firstName;
    this.nameLast=result?.student?.studentInfo.lastName;
    this.marksObtained = result?.student?.obtainMarks;
    this.rank = result?.student?.rank;
    this.status = result?.student?.status;
    this.topStudents = result?.topStudent;
    this.calculatePercentages();
    this.calculateMarksPercentage();
    this.spinner.hide();

  }

  calculatePercentages(): void {
    if (this.totalStudents > 0) {
      this.attemptPercentage = (this.stuAttempted / this.totalStudents) * 100;
      this.notAttemptPercentage =
        (this.stuNotAttempted / this.totalStudents) * 100;
    } else {
      this.attemptPercentage = 0;
      this.notAttemptPercentage = 0;
    }
   
  }

  calculateMarksPercentage() {
    if (this.totalMarks > 0) {
      this.marksPercent = (this.marksObtained / this.totalMarks) * 100;
    }
  }

  nextSet() {
    this.router.navigate(['default/test']);
  }

  // calculateQuesAttemptPercentage() {
  //   if (this.totalQuestions > 0) {
  //     this.questionsPercent =
  //       (this.questionsAttempted / this.totalQuestions) * 100;
  //   }
  // }

  percentFormat = (percent: number) => `${percent}%`;
  marksFormat = () => `${this.marksObtained}`;
  // questionsFormat = () => `${this.questionsAttempted}`;
  MarkStatusFormat(): NzProgressStatusType {
    if (this.marksPercent > 70) return 'success';
    else if (this.marksPercent > 40) return 'normal';
    else return 'exception';
  }

  goBack() {
    this.location.back();
  }

  // QuestionStatusFormat(): NzProgressStatusType {
  //   if (this.questionsPercent > 70) return 'success';
  //   else if (this.questionsPercent > 40) return null;
  //   else return 'exception';
  // }
}
