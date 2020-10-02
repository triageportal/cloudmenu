import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeoutRoutingModule } from './takeout-routing.module';
import { TakeoutComponent } from './takeout/takeout.component';


@NgModule({
  declarations: [TakeoutComponent],
  imports: [
    CommonModule,
    TakeoutRoutingModule
  ]
})
export class TakeoutModule { }
