import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionSetService } from '@services/questionSet/question-set.service';
import { SeminarService } from '@services/seminar/seminar.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question-set-form',
  templateUrl: './question-set-form.component.html',
  styleUrls: ['./question-set-form.component.scss'],
})
export class QuestionSetFormComponent implements OnInit {
  seminars: any;
  totalSeminars: number = 0;
  submitted = false;
  questionSetForm = this.formBuilder.group({
    _id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    noOfQuestion: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    passingMarks: new FormControl('', [Validators.required]),
    seminarId: new FormControl('', [Validators.required]),
  });

  constructor(
    private router: Router,
    private questionSetService: QuestionSetService,
    private seminarService: SeminarService,
    private formBuilder: FormBuilder,
    private location: Location,
    private spinner: NgxSpinnerService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getSeminarList();
  }

  get form() {
    return this.questionSetForm.controls;
  }

  getSeminarList() {
    this.seminarService.allSeminarList().subscribe(
      (success) => {
        console.log(success);
        this.seminars = success?.result?.data;
        console.log('this.seminars', this.seminars);

        // this.totalSeminars = success?.result?.
      },
      (error) => {}
    );
  }

  submit() {
    this.submitted = true;
    if (this.questionSetForm.invalid) {
      this.toastService.warning('Please fill all required field!');
      return;
    }
    let formData = this.questionSetForm.value;
    if (formData._id) {
      this.update(formData);
    } else {
      delete formData.id;
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.questionSetService
      .createQuestionSet(formData, formData.seminarId)
      .subscribe(
        (success) => {
          this.spinner.hide();
          this.toastService.success(success.message);
          this.router.navigate(['questionSet/questionSet']);
        },
        (error) => {
          this.spinner.hide();
          this.toastService.error(error.message);
        }
      );
  }

  update(formData) {
    this.spinner.show();
    this.questionSetService.updateQuestionSet(formData, formData._id).subscribe(
      (success) => {
        this.submitted = false;
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(['questionSet/questionSet']);
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error(error.message);
      }
    );
  }

  goBack() {
    this.location.back();
  }
}
