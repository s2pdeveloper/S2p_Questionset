import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ReportPageComponent } from './report-page/report-page.component';
import { ResultPageComponent } from './result-page/result-page.component';
import { NotFoundPageComponent } from './not-found-page/not-found-page.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';

export const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'test',
  //   pathMatch:'full'
  // },
  {
    path: 'login/:id',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'login',
    title: 'Login',
    component: LoginComponent,
  },
  {
    path: 'register/:id',
    title: 'Registration',
    component: RegisterComponent,
  },
  
  {
    path: 'default',
    component: DefaultLayoutComponent,
    children: [
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
    ]},
  
  {
    path: '**',
    title:"Page Not Found",
    component: NotFoundPageComponent,
  },
];
