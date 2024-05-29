import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { StartTestComponent } from './start-test/start-test.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ReportPageComponent } from './report-page/report-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'register',
    pathMatch: 'full',
  },
  {
    path: 'register',
    title: 'Registration',
    component: RegisterComponent,
  },
  {
    path: 'start-test',
    title: 'Start Test',
    component: StartTestComponent,
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
