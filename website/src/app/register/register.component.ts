import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { StartTestComponent } from '../start-test/start-test.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule,RouterOutlet, ReactiveFormsModule, RouterLink, StartTestComponent],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  constructor(private router: Router) {}

  users: any[] = [];
  branch=[{
    label:'A',value:'A'
  }];
  department=[{
    label:'A',value:'A'
  }];
  regForm = new FormGroup({
    fname: new FormControl(''),
    email: new FormControl(''),
    mobileNo: new FormControl(''),
    gender: new FormControl(''),
    collegeName: new FormControl(''),
    rollNo: new FormControl(''),
    department: new FormControl(''),
    branch: new FormControl(''),
    semester: new FormControl(''),
  });

  register() {
    console.log("value",this.regForm.value);
    this.regForm.reset();
    this.router.navigate(['/start-test']);
  }
}
