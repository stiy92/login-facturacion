import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegFacturasPageRoutingModule } from './reg-facturas-routing.module';

import { RegFacturasPage } from './reg-facturas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegFacturasPageRoutingModule
  ],
  declarations: [RegFacturasPage]
})
export class RegFacturasPageModule {}
