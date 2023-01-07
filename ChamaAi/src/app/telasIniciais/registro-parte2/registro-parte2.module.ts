import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroParte2PageRoutingModule } from './registro-parte2-routing.module';

import { RegistroParte2Page } from './registro-parte2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroParte2PageRoutingModule
  ],
  declarations: [RegistroParte2Page]
})
export class RegistroParte2PageModule {}
