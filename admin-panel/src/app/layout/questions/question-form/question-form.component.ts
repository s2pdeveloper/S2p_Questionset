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
  images: any;
  displayImage:any
  questionForm = this.formBuilder.group({
    _id: new FormControl(null),
    question: new FormControl(''),
    type: new FormControl('', [Validators.required]),
    hint: new FormControl(''),
    options: new FormControl('', [Validators.required]),
    correctOption: new FormControl('', [Validators.required]),
    questionType: new FormControl('TEXT', [Validators.required]),
    queImageUrl: new FormControl(''),
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
      console.log('get by id', success);
      this.splitArray = success?.result[0]?.options[0]?.split(',');
      // this.splitArray = success?.result[0]?.options;
      this.displayImage = success?.result[0]?.queImageUrl

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

    let fd = new FormData();
    fd.append('question', formData.question);
    fd.append('type', formData.type);
    fd.append('hint', formData.hint);
    fd.append('options', formData.options);
    fd.append('correctOption', formData.correctOption);
    fd.append('questionType', formData.questionType);
    if (this.images) {
      fd.append('queImageUrl', this.images, this.images.name);
    }

    if (formData._id) {
      this.update(fd,formData._id);
    } else {
      delete formData._id;
      this.create(fd);
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

  update(formData,id) {
    this.spinner.show();
    this.questionService.updateQuestion(formData, id).subscribe(
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

  toggleQueType(e: any) {
    this.form.question.setValue('');
    this.form.queImageUrl.setValue('');
    this.form.questionType.setValue(e.target.value);
  }

  fileBrowseHandler(event: any) {
    if (event.target.value) {
      if (event.target.files[0].size > 2000000) {
        this.toastService.warning(
          'Unable to upload image of size more than 2MB'
        );
        return;
      }
      this.images = <File>event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(this.images);
      reader.onload = () => {
        this.displayImage = reader.result;
      };
      reader.onerror = (error) => {};
    }
  }
}
