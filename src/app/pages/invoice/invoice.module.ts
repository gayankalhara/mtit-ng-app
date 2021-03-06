import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule as AngularFormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppTranslationModule } from '../../app.translation.module';
import { NgaModule } from '../../theme/nga.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';

import { routing } from './invoice.routing';

import { InvoiceComponent } from './invoice.component';
import { CreateComponent } from './components/create/create.component';
import { ManageComponent } from './components/manage/manage.component';

import { MyDatePickerModule } from 'mydatepicker';
import { InvoiceService } from '../../services/invoice.service';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    AppTranslationModule,
    NgaModule,
    NgbRatingModule,
    routing,
    MyDatePickerModule,
    ReactiveFormsModule,
    NgxDatatableModule,
  ],
  declarations: [
    InvoiceComponent,
    CreateComponent,
    ManageComponent,
  ],
  providers: [
    InvoiceService,
  ],
})
export class InvoiceModule {
}
