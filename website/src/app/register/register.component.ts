import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import {
  ActivatedRoute,
  Router,
  RouterLink,
  RouterOutlet,
} from '@angular/router';
import { StartTestComponent } from '../start-test/start-test.component';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    ReactiveFormsModule,
    RouterLink,
    StartTestComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  users: any[] = [];
  branch = [
    {
      label: 'A',
      value: 'A',
    },
  ];
  degree = [
    {
      label: 'A',
      value: 'A',
    },
  ];

  seminarId: string | null = null;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private studentData: StudentService
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe((param) => {
      this.seminarId = param.get('seminarId');
    });
  }

  regForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    gender: new FormControl(''),
    college: new FormControl(''),
    degree: new FormControl(''),
    branch: new FormControl(''),
    semester: new FormControl(''),
  });

  register() {
    console.log('value', this.regForm.value);
    this.studentData.registerStudent(this.regForm.value, this.seminarId).subscribe((success:any) =>{
      console.log(success);
    });
    this.regForm.reset();
    this.router.navigate(['/start-test']);
  }
}