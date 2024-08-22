import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ValidationService } from '../../../core/components';
import { UserService } from '../../../services/users/user.service';
import { NgxSpinnerService } from 'ngx-spinner';


@Component({
  selector: 'app-tags-form',
  templateUrl: './tags-form.component.html',
  styleUrls: ['./tags-form.component.scss'],
})
export class TagsFormComponent implements OnInit {
  seminars: any;
  action: string = '';
  submitted = false;
  optionsList: string[] = [];
  splitArray: any = [{ option: '' }];
  images: any;
  displayImage: any;
  tagsForm = this.formBuilder.group({
    _id: new FormControl(null),
    tagName: new FormControl('', [Validators.required]),
  });

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private formBuilder: FormBuilder,
    private location: Location,
    private validationService: ValidationService,
    private actRoutes: ActivatedRoute,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    
  }

  get form() {
    return this.tagsForm.controls;
  }

  
}
