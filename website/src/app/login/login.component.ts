import { Component, OnInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { NgModule } from '@angular/core';
import { FormGroup, FormsModule } from '@angular/forms';

import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { StudentService } from '../services/student.service';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  standalone: true,

  imports: [
    ReactiveFormsModule,
    RouterLink,
    RouterOutlet,
    CommonModule,
    HttpClientModule,
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  phoneNumber: any;
  showImg: boolean = true;

  constructor(
    private router: Router,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
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
    if (width <= 880) {
      this.showImg = false;
    }
    if (width >= 880) {
      this.showImg = true;
    }
  }

  seminarId: string;

  submitted = false;
  otpVisible = false;
  isOtpSent = false;

  userData = {};

  showOtpFields() {
    if (
      !this.loginForm.controls['phone'].value ||
      this.loginForm.controls['phone'].invalid
    ) {
      this.toastService.warning('Please enter valid or correct phone number');
      return;
    }
    this.spinner.show();
    // Call the API using the service
    this.studentService.otpLogin(this.loginForm.value).subscribe(
      (response: any) => {
        this.toastService.success(response?.result?.message);
        // On success, make OTP fields visible and change button text
        this.otpVisible = true;
        this.isOtpSent = true;
        this.spinner.hide();
      },
      (error) => {
        this.spinner.hide();
        console.log(error.error.error);

        this.toastService.error(error.error.error);
        // Handle error here, e.g., show an error message to the user
      }
    );
  }

  // onInput(event: Event) {
  //   const input = event.target as HTMLInputElement;
  //   const nextSibling = input.nextElementSibling as HTMLInputElement;
  //   if (input.value && nextSibling) {
  //     nextSibling.focus();
  //   }
  // }

  // onKeydown(event: KeyboardEvent, controlName: string) {
  //   const input = event.target as HTMLInputElement;
  //   if (event.key === 'Backspace' && !input.value) {
  //     const prevSibling = input.previousElementSibling as HTMLInputElement;
  //     if (prevSibling) {
  //       prevSibling.focus();
  //     }
  //   }
  // }

  loginForm = new FormGroup({
    phone: new FormControl('', [
      Validators.required,
      Validators.pattern(/^\d{0,10}$/),
    ]),
    otp: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params: any) => {
      console.log('Login Params****', params);

      const id = this.route.snapshot.paramMap.get('id');
      this.seminarId = id;
      if (id) {
        localStorage.setItem('SeminarId', id);
      }
      localStorage.removeItem('StudentId');
    });
    console.log(this.seminarId);
  }

  login() {
    this.submitted = true;
    console.log('Login form value', this.loginForm);

    if (this.loginForm.invalid) {
      this.toastService.error('OTP is invalid');
      return;
    }

    this.spinner.show();
    this.studentService.loginStudent(this.loginForm.value).subscribe(
      (success: any) => {
        console.log('Login Success', success);
        this.spinner.hide();
        localStorage.setItem('StudentId', success?.result?.user?.id);
        localStorage.setItem('token', success?.result?.token);
        localStorage.setItem('SeminarId', success?.result?.user?.seminarId);
        this.loginForm.reset();
        this.router.navigate(['default/test']);
      },
      (error) => {
        this.spinner.hide();
        this.toastService.error(error.message);
      }
    );
  }
  navigateToRegister() {
    this.router.navigate([`register/${this.seminarId}`]);
  }

  validatePhoneNumber(event: KeyboardEvent) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  }
}
