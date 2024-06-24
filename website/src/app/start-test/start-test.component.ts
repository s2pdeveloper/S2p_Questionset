import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-start-test',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './start-test.component.html',
  styleUrl: './start-test.component.css',
})
export class StartTestComponent implements OnInit {
  constructor(private router: Router, private actRoute: ActivatedRoute) {}

  seminarId: string | null = null;

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params: any) => {
      this.seminarId = params.seminarId;
      if (this.seminarId) {
        this.startTest(this.seminarId);
      }
    });
  }
  startTest(seminarId: string): void {
    this.router.navigate(['/test']);
  }
}
