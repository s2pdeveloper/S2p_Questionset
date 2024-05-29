import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
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
export class AppComponent {
  title = 'project1';
}
