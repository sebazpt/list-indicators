import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndicatorsListComponent } from './indicators-list.component';
import { IndicatorsListRoutingModule } from './indicators-list-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [
    CommonModule,
    IndicatorsListRoutingModule,
    NgbModule
  ],
  declarations: [IndicatorsListComponent]
})
export class IndicatorsListModule { }
