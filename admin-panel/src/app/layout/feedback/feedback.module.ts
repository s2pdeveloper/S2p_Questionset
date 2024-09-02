import { NgModule } from '@angular/core';
import { FeedBackListComponent } from './feedback-list/feedback-list.component';
import { FeedBackFormComponent } from './feedback-form/feedback-form.component';
import { FeedBackRoutingModule } from './feedback-routing.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [FeedBackListComponent, FeedBackFormComponent],
  imports: [FeedBackRoutingModule, CoreModule.forRoot()],
})
export class FeedBackModule {}
