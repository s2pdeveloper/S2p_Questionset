import { NgModule } from '@angular/core';
import { SeminarsRoutingModule } from './seminars-routing.module';
import { SeminarFormComponent } from './seminar-form/seminar-form.component';
import { SeminarListComponent } from './seminar-list/seminar-list.component';
import { CoreModule } from '../../core/core.module';

@NgModule({
  declarations: [SeminarFormComponent, SeminarListComponent],
  imports: [SeminarsRoutingModule, CoreModule.forRoot()],
})
export class SeminarsModule {}
