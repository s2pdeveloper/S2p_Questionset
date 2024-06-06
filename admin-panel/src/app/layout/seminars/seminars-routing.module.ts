import { NgModule } from '@angular/core';
import { SeminarListComponent } from './seminar-list/seminar-list.component';
import { SeminarFormComponent } from './seminar-form/seminar-form.component';
import { RouterModule, Routes } from '@angular/router';

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
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(seminarRoutes)],
  exports: [RouterModule],
})

export class SeminarsRoutingModule {}
