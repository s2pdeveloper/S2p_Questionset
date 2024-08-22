import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../../../core/components';
import { NgxSpinnerService } from 'ngx-spinner';
import { TagsService } from '@services/tags/tags.service';

@Component({
  selector: 'app-tags-form',
  templateUrl: './tags-form.component.html',
  styleUrls: ['./tags-form.component.scss'],
})
export class TagsFormComponent implements OnInit {
  submitted = false;
  tagsForm = this.formBuilder.group({
    _id: new FormControl(null),
    name: new FormControl('', [Validators.required]),
  });

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private tagService: TagsService,
    private actRoutes: ActivatedRoute,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.actRoutes.queryParams.subscribe((params) => {
      if (params.id) {
        this.getById(params.id);
      }
    });
  }

  get form() {
    return this.tagsForm.controls;
  }

  getById(id) {
    this.tagService.getTagById(id).subscribe((success) => {
      // console.log("Print" ,success);
      this.tagsForm.patchValue(success?.result[0]);
    });
  }

  submit() {
    this.submitted = true;
    if (this.tagsForm.invalid) {
      this.toastService.warning('Please fill the required field!');
      return;
    }
    let formData = this.tagsForm.value;
    if (formData._id) {
      this.update(formData);
    } else {
      delete formData.id;
      this.create(formData);
    }
  }

  create(formData) {
    this.spinner.show();
    this.tagService.createTag(formData).subscribe((success) => {
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(['tags/list']);
    });
  }

  update(formData) {
    this.spinner.show();
    this.tagService.updateTag(formData, formData._id).subscribe((success) => {
      this.submitted = false;
      this.spinner.hide();
      this.toastService.success(success.message);
      this.router.navigate(['tags/list']);
    });
  }

  goBack() {
    this.location.back();
  }
}
