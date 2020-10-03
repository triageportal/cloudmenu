import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MenuRoutingModule } from './menu-routing.module';
import { MenuComponent } from './menu/menu.component';
import { MenuTypesComponent } from './menu-types/menu-types.component';
import { SubMenusComponent } from './sub-menus/sub-menus.component';
import { ItemsComponent } from './items/items.component';


@NgModule({
  declarations: [MenuComponent, MenuTypesComponent, SubMenusComponent, ItemsComponent],
  imports: [
    CommonModule,
    MenuRoutingModule
  ]
})
export class MenuModule { }
