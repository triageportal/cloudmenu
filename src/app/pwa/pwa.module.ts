import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PwaRoutingModule } from './pwa-routing.module';
import { PwaComponent } from './pwa/pwa.component';
import { HeaderModule } from '../header/header.module';
import { RestaurantsComponent } from './restaurants/restaurants.component';


@NgModule({
  declarations: [PwaComponent, RestaurantsComponent],
  imports: [
    CommonModule,
    PwaRoutingModule,
    HeaderModule
  ]
})
export class PwaModule { }
