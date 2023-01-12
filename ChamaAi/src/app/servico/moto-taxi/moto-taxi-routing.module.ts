import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MotoTaxiPage } from './moto-taxi.page';

const routes: Routes = [
  {
    path: '',
    component: MotoTaxiPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MotoTaxiPageRoutingModule {}
