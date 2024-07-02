import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  constructor(
    private router: Router,
    private actRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    private studentService: StudentService
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
    this.actRoute.queryParams.subscribe((params: any) => {
      // console.log(params);
      // this.seminarId = params.get('seminarId');
      this.seminarId = params.seminarId;
      // console.log(this.seminarId);
      localStorage.setItem('SeminarId', this.seminarId);
      localStorage.removeItem('StudentId');
    });
  }

  register() {
    console.log('value', this.regForm.value);
    this.studentService
      .registerStudent(this.regForm.value, this.seminarId)
      .subscribe((success: any) => {
        console.log('success----', success);
        localStorage.setItem('StudentId', success?.studentId);
      });
    this.regForm.reset();
    this.router.navigate(['/test']);
  }
}
