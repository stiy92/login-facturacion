import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegFacturasPage } from './reg-facturas.page';

const routes: Routes = [
  {
    path: '',
    component: RegFacturasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegFacturasPageRoutingModule {}
