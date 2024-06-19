import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SeminarService } from '@services/seminar/seminar.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-seminar-form',
  templateUrl: './seminar-form.component.html',
  styleUrls: ['./seminar-form.component.scss'],
})
export class SeminarFormComponent implements OnInit {
  submitted = false;
  action: string = '';
  seminarForm = this.formBuilder.group({
    _id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
    type: new FormControl('', [Validators.required]),
    college: new FormControl('', [Validators.required]),
    dateOfSeminar: new FormControl('', [Validators.required]),
    duration: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  constructor(
    private seminarService: SeminarService,
    private router: Router,
    private formBuilder: FormBuilder,
    private actRoutes: ActivatedRoute,
    private location: Location,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    this.actRoutes.queryParams.subscribe((params) => {
      this.action = params.action;
      if(params.id){
        this.getById(params.id);
      }
    })
  }

  get form() {
    return this.seminarForm.controls;
  }

  getById(id) {
    this.seminarService.getSeminarById(id).subscribe((success) => {
      success.result[0].dateOfSeminar
      = success.result[0].dateOfSeminar
      .split('T')[0] 
      this.seminarForm.patchValue(success.result[0]);
    });
  }

  submit() {
    this.submitted = true;
    if (this.seminarForm.invalid) {
      this.toastService.warning('Please fill all required field!');
      return;
    }
    let formData = this.seminarForm.value;
    if (formData._id) {
      this.update(formData);
    } else {
      delete formData.id;
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.seminarService.addNewSeminar(formData).subscribe((success) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(['seminars/seminars']);
    });
  }

  update(formData) {
    this.spinner.show();
    this.seminarService
      .updateSeminar(formData._id, formData)
      .subscribe((success) => {
        this.submitted = false;
        this.spinner.hide();
        this.toastService.success(success.message);
        this.router.navigate(['seminars/seminars']);
      });
  }

  goBack() {
    this.location.back();
  }
}
