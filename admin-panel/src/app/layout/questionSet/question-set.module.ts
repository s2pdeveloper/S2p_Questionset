import { NgModule } from '@angular/core';
import { QuestionSetListComponent } from './question-set-list/question-set-list.component';
import { QuestionSetFormComponent } from './question-set-form/question-set-form.component';
import { QuestionSetRoutingModule } from './question-set-routing.module';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [QuestionSetFormComponent, QuestionSetListComponent],
  imports: [QuestionSetRoutingModule, CoreModule.forRoot()],
})
export class QuestionSetModule {}
