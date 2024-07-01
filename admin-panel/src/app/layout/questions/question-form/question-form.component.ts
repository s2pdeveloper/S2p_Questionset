import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { QuestionsService } from '@services/questions/questions.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrls: ['./question-form.component.scss'],
})
export class QuestionFormComponent implements OnInit {
  constructor(
    private router: Router,
    private questionService: QuestionsService,
    private formBuilder: FormBuilder,
    private actRoutes: ActivatedRoute,
    private location: Location,
    private spinner: NgxSpinnerService,
    private toastService: ToastrService
  ) {}

  submitted = false;
  optionsList: string[] = [];
  setId: any = null;
  splitArray: [] = [];
  act: string = '';
  questionForm = this.formBuilder.group({
    _id: new FormControl(null),
    question: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    hint: new FormControl(''),
    options: new FormControl('', [Validators.required]),
    correctOption: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.actRoutes.queryParams.subscribe((params) => {
      this.setId = params.s_id;
      this.act = params.action;
      console.log('set id in form', this.setId);
      if (params.q_id) {
        this.getById(params.q_id);
      }
    });
  }

  get form() {
    return this.questionForm.controls;
  }

  onTextChange(ev: any) {
    // console.log(ev.target.value);

    this.splitArray = ev.target.value.split(',');
    // this.questionForm.get('options')?.setValue(splitArray);
    // console.log(this.splitArray);
  }

  getById(id) {
    this.questionService.getQuestionById(id).subscribe((success) => {
      console.log("get by id", success);
      // this.splitArray = success?.result[0]?.options[0]?.split(',');
      this.splitArray = success?.result[0]?.options;

      this.questionForm.patchValue(success?.result[0]);
    });
  }

  submit() {
    this.submitted = true;
    if (this.questionForm.invalid) {
      this.toastService.warning('Please fill all required fields!');
      return;
    }
    let formData = this.questionForm.value;
    formData.options = this.splitArray;

    console.log(formData);
    if (formData._id) {
      this.update(formData);
    } else {
      delete formData.id;
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.questionService.createQuestion(formData, this.setId).subscribe(
      (success) => {
        console.log('Created Question', success);
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(['questions/questions-list'], {
          queryParams: { id: this.setId },
        });
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error(error.message);
      }
    );
  }

  update(formData) {
    this.spinner.show();
    this.questionService.updateQuestion(formData, formData._id).subscribe(
      (success) => {
        this.submitted = false;
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(['questions/questions-list'], {
          queryParams: { id: this.setId },
        });
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
