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
import { ActivatedRoute } from '@angular/router';

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
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {}

  users: any[] = [];
  branch = [
    { label: 'Aerospace Engineering', value: 'Aerospace Engineering' },
    { label: 'Automobile Engineering', value: 'Automobile Engineering' },
    { label: 'Biotechnology Engineering', value: 'Biotechnology Engineering' },
    { label: 'Chemical Engineering', value: 'Chemical Engineering' },
    { label: 'Civil Engineering', value: 'Civil Engineering' },
    { label: 'Computer Science Engineering', value: 'Computer Science Engineering' },
    { label: 'Electrical Engineering', value: 'Electrical Engineering' },
    { label: 'Electronics and Communication Engineering', value: 'Electronics and Communication Engineering' },
    { label: 'Environmental Engineering', value: 'Environmental Engineering' },
    { label: 'Industrial Engineering', value: 'Industrial Engineering' },
    { label: 'Information Technology', value: 'Information Technology' },
    { label: 'Marine Engineering', value: 'Marine Engineering' },
    { label: 'Mechanical Engineering', value: 'Mechanical Engineering' },
    { label: 'Metallurgical Engineering', value: 'Metallurgical Engineering' },
    { label: 'Petroleum Engineering', value: 'Petroleum Engineering' },
    { label: 'Other', value: 'Other' },
  ];
  degree = [
    { label: 'Bachelor of Arts', value: 'BA' },
  { label: 'Bachelor of Architecture', value: 'BArch' },
  { label: 'Bachelor of Business Administration', value: 'BBA' },
  { label: 'Bachelor of Commerce', value: 'BCOM' },
  { label: 'Bachelor of Computer Applications', value: 'BCA' },
  { label: 'Bachelor of Education', value: 'BEd' },
  { label: 'Bachelor of Engineering', value: 'BE' },
  { label: 'Bachelor of Fine Arts', value: 'BFA' },
  { label: 'Bachelor of Pharmacy', value: 'BPharm' },
  { label: 'Bachelor of Science', value: 'BSc' },
  { label: 'Bachelor of Technology', value: 'BTech' },
  { label: 'Bachelor of Medicine, Bachelor of Surgery', value: 'MBBS' },
  { label: 'Other', value: 'Other' },
  ];


   semesters = [
    { label: 'First Semester', value: 'First Semester' },
    { label: 'Second Semester', value: 'Second Semester' },
    { label: 'Third Semester', value: 'Third Semester' },
    { label: 'Fourth Semester', value: 'Fourth Semester' },
    { label: 'Fifth Semester', value: 'Fifth Semester' },
    { label: 'Sixth Semester', value: 'Sixth Semester' },
    { label: 'Seventh Semester', value: 'Seventh Semester' },
    { label: 'Eighth Semester', value: 'Eighth Semester' }
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
    // this.seminarId = localStorage.getItem('SeminarId');
    // console.log('Seminar ID in Register' , this.seminarId);

    // localStorage.removeItem('StudentId');

    const id = this.route.snapshot.paramMap.get('id');
    this.seminarId=id;
  if (id) {
    localStorage.setItem('SeminarId', id);
  }
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
        localStorage.setItem('token', success?.token);
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
