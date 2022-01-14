import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndicatorsListComponent } from './indicators-list.component';

const routes: Routes = [
  {
    path: '',
    component: IndicatorsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndicatorsListRoutingModule {}
