import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NumeroCelPage } from './numero-cel.page';

const routes: Routes = [
  {
    path: '',
    component: NumeroCelPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NumeroCelPageRoutingModule {}
