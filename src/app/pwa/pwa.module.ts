import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwaRoutingModule } from './pwa-routing.module';
import { PwaComponent } from './pwa/pwa.component';
import { HeaderModule } from '../shared/header/header.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DailySpecialsComponent } from './daily-specials/daily-specials.component';
import { FooterModule } from '../shared/footer/footer.module';


@NgModule({
  declarations: [PwaComponent, RestaurantsComponent, DailySpecialsComponent],
  imports: [
    CommonModule,
    PwaRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class PwaModule { }
