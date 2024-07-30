import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule


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

  imports: [ReactiveFormsModule, RouterLink, RouterOutlet, CommonModule, ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  constructor(
    private router: Router,
    private studentService: StudentService,
    private formBuilder: FormBuilder,
    private actRoute: ActivatedRoute,
    private toastService: ToastrService,
    private spinner: NgxSpinnerService,
    private route: ActivatedRoute
  ) {}

  seminarId: string | null = null;

  submitted = false;
  otpVisible = false;
  buttonText = 'Send OTP';
  userData = {};

  showOtpFields() {
    // Call the API using the service
    this.studentService.otpLogin(this.userData).subscribe({
      next: (response) => {
        // On success, make OTP fields visible and change button text
        this.otpVisible = true;
        this.buttonText = 'Submit'; // Change button text to 'Submit'
      },
      error: (err) => {
        console.error('Error logging in:', err);
        // Handle error here, e.g., show an error message to the user
      }
    });
  }

  onInput(event: any) {
    const input = event.target;
    input.value = input.value.replace(/[^0-9]/g, '');
  }

  loginForm = this.formBuilder.group({
    phone: new FormControl('', [Validators.required]),
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
  }

  login() {
    this.submitted = true;
    // console.log('Login form value', this.loginForm.value);
    let formData = this.loginForm.value;
    this.spinner.show();
    this.studentService.loginStudent(formData).subscribe(
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
        this.toastService.error('Registration failed');
      }
    );
  }
}
