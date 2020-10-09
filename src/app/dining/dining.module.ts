import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DiningRoutingModule } from './dining-routing.module';
import { DiningComponent } from './dining/dining.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


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
