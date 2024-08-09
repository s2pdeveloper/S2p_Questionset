import { Component, OnInit, HostListener } from '@angular/core';
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
  imports: [CommonModule, ReactiveFormsModule, NgxSpinnerModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  isHidden: boolean = false;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private studentService: StudentService,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {
    this.checkWindowSize();
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.checkWindowSize();
  }

  checkWindowSize() {
    const width = window.innerWidth;

    // Adjust the width as per your requirement
    if (width <= 575) {
      this.isHidden = true;
    }
    if (width >= 575) {
      this.isHidden = false;
    }
  }

  users: any[] = [];
  branch = [
    { label: 'Aerospace Engineering', value: 'Aerospace Engineering' },
    { label: 'Automobile Engineering', value: 'Automobile Engineering' },
    { label: 'Biotechnology Engineering', value: 'Biotechnology Engineering' },
    { label: 'Chemical Engineering', value: 'Chemical Engineering' },
    { label: 'Civil Engineering', value: 'Civil Engineering' },
    {
      label: 'Computer Science Engineering',
      value: 'Computer Science Engineering',
    },
    { label: 'Electrical Engineering', value: 'Electrical Engineering' },
    {
      label: 'Electronics and Communication Engineering',
      value: 'Electronics and Communication Engineering',
    },
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
    { label: 'Eighth Semester', value: 'Eighth Semester' },
  ];

  seminarId: string | null = null;
  submitted = false;

  regForm = this.formBuilder.group({
    // _id: new FormControl(null),
    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required,  Validators.pattern(/^\d{0,10}$/)]),
    gender: new FormControl(''),
    college: new FormControl(''),
    degree: new FormControl(''),
    branch: new FormControl(''),
    semester: new FormControl(''),
  });

  get f(){
    return this.regForm.controls
  }

  get phoneNumber(): number | null {
    const phoneString = this.regForm.get('phone')?.value;
    return phoneString ? Number(phoneString) : null;
  }

  get email() {
    return this.regForm.get('email');
  }

  // get phone(){
  //   return this.phone.get('phone');
  // }

  ngOnInit(): void {
    // this.seminarId = localStorage.getItem('SeminarId');
    // console.log('Seminar ID in Register' , this.seminarId);

    // localStorage.removeItem('StudentId');

    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      localStorage.setItem('SeminarId', id);
      // this.regForm.patchValue({ id: id });
      this.seminarId = id
    }

    
  }

  register() {
    this.submitted = true;
    if(this.regForm.invalid){
      this.toastService.warning('Please fill all required fields');
      return;

    }

    const phoneNumber = this.phoneNumber;
    if (phoneNumber === null) {
      this.toastService.error('Phone number must be a valid number');
      return;
    }
    const formData = { ...this.regForm.value, phone: phoneNumber };

    // console.log('value', this.regForm.value);
    this.spinner.show();
    this.studentService.registerStudent(formData, this.seminarId).subscribe(
      (success: any) => {
        console.log('success----', success);
        this.spinner.hide();
        localStorage.setItem('StudentId', success?.studentId);
        localStorage.setItem('token', success?.token);
        this.toastService.success(success?.message);
        this.regForm.reset();
        this.router.navigate(['default/test']);
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error(error?.error?.error);
      }
    );
  }

  navigateToLogin() {
    this.router.navigate([`login/${this.seminarId}`]);
  }

  validatePhoneNumber(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }

  
}
