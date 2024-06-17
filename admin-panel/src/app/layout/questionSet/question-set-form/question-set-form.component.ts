import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { QuestionSetService } from '@services/questionSet/question-set.service';

@Component({
  selector: 'app-question-set-form',
  templateUrl: './question-set-form.component.html',
  styleUrls: ['./question-set-form.component.scss']
})
export class QuestionSetFormComponent implements OnInit {
  submitted = false;
  questionSetForm = this.formBuilder.group({
    _id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    noOfQuestion: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    passingMarks: new FormControl('', [Validators.required]),
  });

  constructor(
    private questionSetService: QuestionSetService,
    private formBuilder: FormBuilder,
    private location: Location
  ) { }

  ngOnInit(): void {
  }

  goBack() {
    this.location.back();
  }

}
