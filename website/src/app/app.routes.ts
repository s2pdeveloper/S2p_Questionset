import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

export const routes: Routes = [
  {
    path: 'register',
    title: 'Registration',
    component: RegisterComponent,
  },
  {
    path: 'test',
    component: TestPageComponent,
  },
  {
    path: 'result',
    component: ResultPageComponent,
  },
  {
    path: 'report',
    component: ReportPageComponent,
  },
];
