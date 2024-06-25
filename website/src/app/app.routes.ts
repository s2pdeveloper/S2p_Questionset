import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ReportPageComponent } from './report-page/report-page.component';

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
    path: 'report',
    component: ReportPageComponent,
  },
];
