import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-test.component.html',
  styleUrl: './start-test.component.css'
})
export class StartTestComponent {
  constructor(private router: Router){}
  startTest(subject: string): void {
    if (subject === 'C') {
      this.router.navigate(['/test']);
    }
  }
}
