import { Component, HostListener, OnInit } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { StudentService } from '../services/student.service';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-feedback',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterOutlet,
    CommonModule,
    FormsModule,
    RouterModule,
  ],
  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css',
})
export class FeedbackComponent implements OnInit {
  questions: any[] = [];
  selectedAnswers: any[] = [];
  data: any;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
  }

  answerChange(option: any, index: number, ev: any) {
    let existing = this.selectedAnswers.findIndex((s) => s === option);

    if (!ev.target.checked) {
      this.selectedAnswers.splice(index, 1, '');
      return;
    }

    this.selectedAnswers[index] = option;
    console.log('this.selectedAnswers--22', this.selectedAnswers);
  }

  submit() {

  }

  getFeedDetails(){
    
  }
}
