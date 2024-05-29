import { Component, OnInit } from '@angular/core';
import { NzProgressModule } from 'ng-zorro-antd/progress';

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

  ngOnInit(): void {
    this.calculateAttemptPercentages();
    this.calculateResultPercentages();
  }

  calculateAttemptPercentages(): void{
    if(this.totalStudents > 0){
      this.attemptPercentage = (this.stuAttempted / this.totalStudents) * 100;
      this.notAttemptPercentage = (this.stuNotAttempted / this.totalStudents) * 100;
    }
  }

  calculateResultPercentages(): void {
    if (this.stuAttempted > 0) {
      this.passPercentage = (this.totalPassed / this.stuAttempted) * 100;
      this.failPercentage = (this.totalFailed / this.stuAttempted) * 100;
    }
  }
  passFormat = (percent: number) => `${percent}%`;
  failFormat = (percent: number) => `${percent}%`;
}
