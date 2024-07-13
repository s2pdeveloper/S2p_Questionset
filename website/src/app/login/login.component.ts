import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { StudentService } from '../services/student.service';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

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
    private actRoute: ActivatedRoute
  ) {}

  seminarId: string | null = null;

  submitted = false;
  loginForm = this.formBuilder.group({
    phone: new FormControl('', [Validators.required]),
  });

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params: any) => {
      console.log('Login Params****', params);

      this.seminarId = params.seminarId;
      // console.log(this.seminarId);
      localStorage.setItem('SeminarId', this.seminarId);
      localStorage.removeItem('StudentId');
    });
  }

  login() {
    this.submitted = true;
    // console.log('Login form value', this.loginForm.value);
    let formData = this.loginForm.value;

    this.studentService.loginStudent(formData).subscribe((success: any) => {
      console.log('Login Success', success);
      localStorage.setItem('StudentId', success?.result?.user?.id);
      this.loginForm.reset();
      this.router.navigate(['/test']);
    });
  }
}
