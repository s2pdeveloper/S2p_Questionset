import { Component, OnInit } from '@angular/core';
import { NzProgressModule, NzProgressStatusType } from 'ng-zorro-antd/progress';

@Component({
  selector: 'app-report-page',
  standalone: true,
  imports: [NzProgressModule],
  templateUrl: './report-page.component.html',
  styleUrl: './report-page.component.css',
})
export class ReportPageComponent implements OnInit {
  totalStudents: number = 20;
  stuAttempted: number = 16;
  stuNotAttempted: number = 4;
  totalPassed: number = 12;
  totalFailed: number = 4;

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
    this.calculatePercentages();
    this.calculateMarksPercentage();
    this.calculateQuesAttemptPercentage();
  }

  calculatePercentages(): void {
    if (this.totalStudents > 0) {
      this.attemptPercentage = (this.stuAttempted / this.totalStudents) * 100;
      this.notAttemptPercentage =
        (this.stuNotAttempted / this.totalStudents) * 100;
    }
    if (this.stuAttempted > 0) {
      this.passPercentage = (this.totalPassed / this.stuAttempted) * 100;
      this.failPercentage = (this.totalFailed / this.stuAttempted) * 100;
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
    else if (this.marksPercent > 40) return 'active';
    else return 'exception';
  }
  QuestionStatusFormat(): NzProgressStatusType {
    if (this.questionsPercent > 70) return 'success';
    else if (this.questionsPercent > 40) return 'active';
    else return 'exception';
  }
}
