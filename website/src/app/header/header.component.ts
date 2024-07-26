import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StudentService } from '../services/student.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  constructor(private router: Router, private studentService: StudentService) {}
  attemptTest() {
    this.router.navigate(['default/test']);
  }

  viewReport() {
    this.router.navigate(['default/report']);
  }
  loginPage() {
    this.router.navigate(['default/login/15255']);
  }
}
