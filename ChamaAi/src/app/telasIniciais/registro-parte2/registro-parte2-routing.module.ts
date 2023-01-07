import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroParte2Page } from './registro-parte2.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroParte2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroParte2PageRoutingModule {}
