import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningRoutingModule } from './dining-routing.module';
import { DiningComponent } from './dining/dining.component';
import { HeaderModule } from '../shared/header/header.module';
import { FooterModule } from '../shared/footer/footer.module';


@NgModule({
  declarations: [DiningComponent],
  imports: [
    CommonModule,
    DiningRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class DiningModule { }
