import { NgModule } from '@angular/core';
import { SeminarsRoutingModule } from './seminars-routing.module';
import { SeminarFormComponent } from './seminar-form/seminar-form.component';
import { SeminarListComponent } from './seminar-list/seminar-list.component';
// import { SeminarOverViewComponent } from './seminar-overView';
import { SeminarOverViewComponent } from './seminar-overView/seminar-form.component'
import { CoreModule } from '../../core/core.module';
 import { QRCodeModule } from 'angularx-qrcode'; 
 import { NgApexchartsModule } from 'ng-apexcharts';





@NgModule({
  declarations: [SeminarFormComponent, SeminarListComponent,SeminarOverViewComponent],
  imports: [SeminarsRoutingModule, CoreModule.forRoot(),QRCodeModule,NgApexchartsModule],
})
export class SeminarsModule {}
