import { NgModule } from '@angular/core';
import { QuestionRoutingModule } from './question-routing.module';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent} from './question-form/question-form.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [QuestionListComponent, QuestionFormComponent],
  imports: [QuestionRoutingModule, CoreModule.forRoot()],
})
export class QuestionModule {}
