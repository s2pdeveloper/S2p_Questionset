import { NgModule } from '@angular/core';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent} from './question-form/question-form.component';
import { RouterModule, Routes } from '@angular/router';

const questionRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Questions',
    },
    children: [
      {
        path: '',
        redirectTo: 'questions',
      },
      {
        path: 'questions-list',
        component: QuestionListComponent,
        data: {
          title: 'Questions',
        },
      },
      {
        path: 'questions-form',
        component: QuestionFormComponent,
        data: {
          title: 'Questions Form',
        },
      },
    ],
  },
];


@NgModule({
  imports: [RouterModule.forChild(questionRoutes)],
  exports: [RouterModule],
})

export class QuestionRoutingModule { }
