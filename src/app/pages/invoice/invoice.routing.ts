import { Routes, RouterModule } from '@angular/router';

import { InvoiceComponent } from './invoice.component';
import { CreateComponent } from './components/create/create.component';
import {ManageComponent} from './components/manage/manage.component';

// noinspection TypeScriptValidateTypes
const routes: Routes = [
  {
    path: '',
    component: InvoiceComponent,
    children: [
      { path: 'new', component: CreateComponent },
      { path: 'edit/:id', component: CreateComponent },
      { path: 'manage', component: ManageComponent },
    ],
  },
];

export const routing = RouterModule.forChild(routes);
