import { NgModule } from '@angular/core';
import { TagsListComponent } from './tags-list/tags-list.component';
import { TagsFormComponent } from './tags-form/tags-form.component';
import { TagsRoutingModule } from './tags-routing.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [TagsListComponent, TagsFormComponent],
  imports: [TagsRoutingModule, CoreModule.forRoot()],
})
export class TagsModule {}
