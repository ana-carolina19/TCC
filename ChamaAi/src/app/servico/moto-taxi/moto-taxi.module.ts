import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MotoTaxiPageRoutingModule } from './moto-taxi-routing.module';

import { MotoTaxiPage } from './moto-taxi.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MotoTaxiPageRoutingModule
  ],
  declarations: [MotoTaxiPage]
})
export class MotoTaxiPageModule {}
