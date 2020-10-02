import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningRoutingModule } from './dining-routing.module';
import { DiningComponent } from './dining/dining.component';


@NgModule({
  declarations: [DiningComponent],
  imports: [
    CommonModule,
    DiningRoutingModule
  ]
})
export class DiningModule { }
