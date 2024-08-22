import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../../../core/components';
import { UserService } from '../../../services/users/user.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { FeedbackService } from '@services/feedback/feedback.service';
import { SeminarService } from '@services/seminar/seminar.service';

@Component({
  selector: 'app-feedback-form',
  templateUrl: './feedback-form.component.html',
  styleUrls: ['./feedback-form.component.scss'],
})
export class FeedBackFormComponent implements OnInit {
  seminars: any;
  action: string = '';
  submitted = false;
  optionsList: string[] = [];
  splitArray: any = [{ option: '' }];
  images: any;
  displayImage: any;
  feedbackForm = this.formBuilder.group({
    _id: new FormControl(null),
    question: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    options: new FormControl([]),
    queImageUrl: new FormControl(''),
    seminarId: new FormControl('', [Validators.required]),
  });

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private feedbackService: FeedbackService,
    private seminarService: SeminarService,
    private actRoutes: ActivatedRoute,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.getSeminarList();
    this.actRoutes.queryParams.subscribe((params) => {
      this.action = params.action;
      if (params.id) {
        this.getById(params.id);
      }
    });
  }

  get form() {
    return this.feedbackForm.controls;
  }

  getById(id) {
    this.feedbackService.getFeedbackById(id).subscribe((success) => {
      console.log('get by id', success);
      // this.splitArray = success?.result[0]?.options;

      this.splitArray = success?.result[0]?.options.map((option) => {
        return { option: option };
      });
      // this.splitArray = success?.result[0]?.options;
      this.displayImage = success?.result[0]?.queImageUrl;

      this.feedbackForm.patchValue(success?.result[0]);
    });
  }

  getSeminarList() {
    this.seminarService.allSeminarList().subscribe(
      (success) => {
        console.log(success);
        this.seminars = success?.result?.data;
        // console.log('this.seminars', this.seminars);

        // this.totalSeminars = success?.result?.
      },
      (error) => {}
    );
  }

  addOptionInput() {
    this.splitArray.push({ option: '' });
  }

  removeOptionInput(i: Number) {
    this.splitArray.splice(i, 1);
  }

  submit() {
    this.submitted = true;

    let formData = this.feedbackForm.value;

    console.log('formData', formData);
    

    formData.options = this.splitArray.map((x: any) => {
      return x.option;
    });

    console.log(this.feedbackForm, formData.options);

    if (this.feedbackForm.invalid) {
      this.toastService.warning('Please fill all required fields!');
      return;
    }

    let fd = new FormData();
    fd.append('question', formData.question);
    fd.append('type', formData.type);
    fd.append('seminarId', formData.seminarId);
    fd.append('options', JSON.stringify(formData.options));
    if (this.images) {
      fd.append('queImageUrl', this.images, this.images.name);
    }

    if (formData._id) {
      this.update(fd, formData._id);
    } else {
      delete formData._id;
      this.create(fd);
    }
  }

  create(formData) {
    this.spinner.show();
    this.feedbackService.createFeedback(formData).subscribe(
      (success) => {
        console.log('Created Feedback', success);
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(['feedback/list']);
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error(error.message);
      }
    );
  }

  update(formData, id) {
    this.spinner.show();
    this.feedbackService.updateFeedback(formData, id).subscribe(
      (success) => {
        this.submitted = false;
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(['feedback/list']);
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
