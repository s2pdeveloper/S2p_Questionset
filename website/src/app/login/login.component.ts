import { Component, OnInit } from '@angular/core';

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
  imports: [ReactiveFormsModule, RouterLink, RouterOutlet],
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
        this.toastService.error('Login failed');
      }
    );
  }
}
