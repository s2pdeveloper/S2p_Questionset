import { NgModule } from '@angular/core';
import { QuestionSetFormComponent } from './question-set-form/question-set-form.component';
import { QuestionSetListComponent } from './question-set-list/question-set-list.component';
import { RouterModule, Routes } from '@angular/router';

const questionSetRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Question Set',
    },
    children: [
      {
        path: '',
        redirectTo: 'questionSet',
      },
      {
        path: 'questionSet',
        component: QuestionSetListComponent,
        data: {
          title: 'Question Set List',
        },
      },
      {
        path: 'questionSet-form',
        component: QuestionSetFormComponent,
        data: {
          title: 'Question Set Form',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(questionSetRoutes)],
  exports: [RouterModule],
})
export class QuestionSetRoutingModule {}
