import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink, RouterOutlet } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { StartTestComponent } from './start-test/start-test.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ReportPageComponent } from './report-page/report-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RegisterComponent, StartTestComponent, TestPageComponent, ReportPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private actRoute : ActivatedRoute) {}

  seminarId : any;

  title = 'project1';

  ngOnInit(): void {
    this.actRoute.queryParams.subscribe((params : any) => {
      // console.log(params);
      this.seminarId = params.seminarId;
      // console.log(this.seminarId);
      
      if (this.seminarId) {
        this.router.navigate(['/register'], {queryParams: {seminarId: this.seminarId}});
      }
    })
  }
}
