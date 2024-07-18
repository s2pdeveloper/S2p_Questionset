import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService, NgxSpinnerModule } from 'ngx-spinner';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgxSpinnerModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService
  ) {}

  users: any[] = [];
  branch = [
    {
      label: 'A',
      value: 'A',
    },
    {
      label: 'B',
      value: 'B',
    },
  ];
  degree = [
    {
      label: 'A',
      value: 'A',
    },
    {
      label: 'B',
      value: 'B',
    },
  ];

  seminarId: string | null = null;

  submitted = false;
  regForm = this.formBuilder.group({
    id: new FormControl(null),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    gender: new FormControl('', [Validators.required]),
    college: new FormControl('', [Validators.required]),
    degree: new FormControl('', [Validators.required]),
    branch: new FormControl('', [Validators.required]),
    semester: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.seminarId = localStorage.getItem('SeminarId');
    // console.log('Seminar ID in Register' , this.seminarId);

    localStorage.removeItem('StudentId');
  }

  register() {
    this.submitted = true;
    // console.log('value', this.regForm.value);
    let formData = this.regForm.value;
    this.spinner.show();
    this.studentService.registerStudent(formData, this.seminarId).subscribe(
      (success: any) => {
        console.log('success----', success);
        this.spinner.hide();
        localStorage.setItem('StudentId', success?.studentId);
        this.toastService.success(success?.message);
        this.regForm.reset();
        this.router.navigate(['/test']);
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error('Registration failed');
      }
    );
  }

}
