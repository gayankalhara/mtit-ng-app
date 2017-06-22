import { Routes, RouterModule } from '@angular/router';

import { ModuleWithProviders } from '@angular/core';
import { LogoutComponent } from './logout.component';

// noinspection TypeScriptValidateTypes
export const routes: Routes = [
  {
    path: '',
    component: LogoutComponent,
  },
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
