import { Component, OnInit } from '@angular/core';
import { NzProgressModule, NzProgressStatusType } from 'ng-zorro-antd/progress';
import { StudentService } from '../services/student.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report-page',
  standalone: true,
  imports: [NzProgressModule],
  templateUrl: './report-page.component.html',
  styleUrl: './report-page.component.css',
})
export class ReportPageComponent implements OnInit {

  constructor(private studentService : StudentService, private actRoute: ActivatedRoute) {}



  totalStudents: number = 0;
  stuAttempted: number = 0;
  stuNotAttempted: number = 0;
  totalPassed: number = 0;
  totalFailed: number = 0;

  passPercentage: number = 0;
  failPercentage: number = 0;
  attemptPercentage: number = 0;
  notAttemptPercentage: number = 0;
  marksPercent: number = 0;
  questionsPercent: number = 0;

  totalMarks: number = 10;
  passingMarks: number = 4;
  marksObtained: number = 7;
  totalQuestions: number = 10;
  questionsAttempted: number = 9;

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params) => {
      console.log("Report Params *********", params);
      if(params){
        this.obtainResults(params);
      }
    })
    this.calculateMarksPercentage();
    this.calculateQuesAttemptPercentage();
  }

  obtainResults(params: object){
    // console.log("Params in result function", params);
    
    this.studentService.getRankedResult(params).subscribe((success: any) => {
      console.log("Ranked Result Success" , success);
      this.totalStudents = success?.totalStudent;
      this.stuAttempted = success?.noOfAttemptedStudent;
      this.stuNotAttempted = success?.noOfUnattemptedStudent;
      this.totalPassed = success?.noOfPassStudent;
      this.totalFailed = success?.noOfFailStudent;
      this.passPercentage = success?.percentageOfPassStudent;
      this.failPercentage = success?.percentageOfFailStudent;
      this.calculatePercentages();
    })
  }

  calculatePercentages(): void {
    if (this.totalStudents > 0) {
      this.attemptPercentage = (this.stuAttempted / this.totalStudents) * 100;
      this.notAttemptPercentage =
        (this.stuNotAttempted / this.totalStudents) * 100;
    }else{
      this.attemptPercentage = 0;
      this.notAttemptPercentage = 0;
    }
  }

  calculateMarksPercentage() {
    if (this.totalMarks > 0) {
      this.marksPercent = (this.marksObtained / this.totalMarks) * 100;
    }
  }
  calculateQuesAttemptPercentage() {
    if (this.totalQuestions > 0) {
      this.questionsPercent =
        (this.questionsAttempted / this.totalQuestions) * 100;
    }
  }

  percentFormat = (percent: number) => `${percent}%`;
  marksFormat = () => `${this.marksObtained}`;
  questionsFormat = () => `${this.questionsAttempted}`;
  MarkStatusFormat(): NzProgressStatusType {
    if (this.marksPercent > 70) return 'success';
    else if (this.marksPercent > 40) return null;
    else return 'exception';
  }

  QuestionStatusFormat(): NzProgressStatusType {
    if (this.questionsPercent > 70) return 'success';
    else if (this.questionsPercent > 40) return null;
    else return 'exception';
  }

}
