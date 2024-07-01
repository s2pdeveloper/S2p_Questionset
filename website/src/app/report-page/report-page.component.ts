import { Component, OnInit } from '@angular/core';
import { StudentService } from '../services/student.service';
import { ActivatedRoute, Router } from '@angular/router';
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

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private studentService: StudentService
  ){}

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
    });
  }
}
