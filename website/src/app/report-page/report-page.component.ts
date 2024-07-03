import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-report-page',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './report-page.component.html',
  styleUrl: './report-page.component.css',
})
export class ReportPageComponent implements OnInit {

  results: any[] = [];
  currentIndex: number = 0;
  currentQuestionSet: any = null;

  constructor(private router: Router, private studentService: StudentService) {}

  ngOnInit(): void {
    this.getAllSetResults();
  }

  getAllSetResults() {
    let payload = {
      seminarId: localStorage.getItem('SeminarId'),
      studentId: localStorage.getItem('StudentId'),
    };
    this.studentService.getAllResult(payload).subscribe((success: any) => {
      console.log('Get All result of Student^^^^^^^^^^^', success);
      this.results = success?.Results || [];
      console.log('Result array', this.results);
      if (this.results.length > 0) {
        this.currentQuestionSet = this.results[0];
      }else {
        this.currentQuestionSet = null;
      }
    });
  }

  nextQuestionSet(): void {
    const currentIndex = this.results.findIndex(result => result.questionSet._id === this.currentQuestionSet.questionSet._id);
    if (currentIndex >= 0 && currentIndex < this.results.length - 1) {
      this.currentQuestionSet = this.results[currentIndex + 1];
    } else {
      this.currentQuestionSet = this.results[0]; // Loop back to the first set
    }
  }

  previousQuestionSet(): void{
    const currentIndex = this.results.findIndex(result => result.questionSet._id === this.currentQuestionSet.questionSet._id);
    if (currentIndex > 0 && currentIndex <= this.results.length - 1) {
      this.currentQuestionSet = this.results[currentIndex - 1];
    }else {
      this.currentQuestionSet = this.results[this.results.length - 1]; // Loop back to the first set
    }
  }

  isFirstSet(): boolean {
    return this.results.findIndex(result => result.questionSet._id === this.currentQuestionSet.questionSet._id) === 0;
  }

  isLastSet(): boolean {
    return this.results.findIndex(result => result.questionSet._id === this.currentQuestionSet.questionSet._id) === this.results.length - 1;
  }

  viewDetails(currentSet: any) {
    this.router.navigate(['/result'], {
      queryParams: {
        questionSetId: currentSet?.questionSet?._id,
        resultData: JSON.stringify(currentSet?.result),
      },
    });
  }
}
