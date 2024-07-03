import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { ResultPageComponent } from './result-page/result-page.component';

export const routes: Routes = [
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'register',
    title: 'Registration',
    component: RegisterComponent,
  },
  {
    path: 'test',
    title: 'Test',
    component: TestPageComponent,
  },
  {
    path: 'result',
    title: 'Result',
    component: ResultPageComponent,
  },
  {
    path: 'report',
    title: 'Reports',
    component: ReportPageComponent,
  },
];
