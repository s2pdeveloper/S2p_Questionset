import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagsFormComponent } from './tags-form/tags-form.component';

const userRoutes: Routes = [
  {
    path: '',
    data: {
      title: 'Tags',
    },
    children: [
      {
        path: '',
        redirectTo: 'list',
      },
      {
        path: 'list',
        component: TagsListComponent,
        data: {
          title: 'Tags List',
        },
      },
      {
        path: 'form',
        component: TagsFormComponent,
        data: {
          title: 'Tags Form',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(userRoutes)],
  exports: [RouterModule],
})
export class TagsRoutingModule {}
