import { NgModule } from '@angular/core';
import { SeminarListComponent } from './seminar-list/seminar-list.component';
import { SeminarFormComponent } from './seminar-form/seminar-form.component';

import { RouterModule, Routes } from '@angular/router';
import { SeminarOverViewComponent } from './seminar-overView/seminar-form.component';
import {StudentListComponent} from './studentList/seminar-list.component'



const seminarRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Seminars',
    },
    children: [
      {
        path: '',
        redirectTo: 'seminars',
      },
      {
        path: 'seminars',
        component: SeminarListComponent,
        data: {
          title: 'Seminars List',
        },
      },
      {
        path: 'seminars-form',
        component: SeminarFormComponent,
        data: {
          title: 'Seminars Form',
        },
      },
      {
        path: 'seminars-OverView',
        component: SeminarOverViewComponent,
        data: {
          title: 'Seminar OverView',
        },
      },
      {
        path: 'studentList',
        component: StudentListComponent,
        data: {
          title: 'Student List',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(seminarRoutes)],
  exports: [RouterModule],
})

export class SeminarsRoutingModule {}
