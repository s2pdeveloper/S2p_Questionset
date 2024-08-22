import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FeedBackListComponent } from './feedback-list/feedback-list.component';
import { FeedBackFormComponent } from './feedback-form/feedback-form.component';

const userRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Feedback',
    },
    children: [
      {
        path: '',
        redirectTo: 'Feedback',
      },
      {
        path: 'list',
        component: FeedBackListComponent,
        data: {
          title: 'Feedback List',
        },
      },
      {
        path: 'form',
        component: FeedBackFormComponent,
        data: {
          title: 'Feedback Form',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class FeedBackRoutingModule {}
