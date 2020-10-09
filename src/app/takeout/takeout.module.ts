import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TakeoutRoutingModule } from './takeout-routing.module';
import { TakeoutComponent } from './takeout/takeout.component';
import { HeaderModule } from '../header/header.module';
import { FooterModule } from '../footer/footer.module';


@NgModule({
  declarations: [TakeoutComponent],
  imports: [
    CommonModule,
    TakeoutRoutingModule,
    HeaderModule,
    FooterModule
  ]
})
export class TakeoutModule { }
