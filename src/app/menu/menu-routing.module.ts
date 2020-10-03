import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { MenuTypesComponent } from './menu-types/menu-types.component';
import { SubMenusComponent } from './sub-menus/sub-menus.component';

const routes: Routes = [
  { 
    path: '', component: MenuComponent,
    children: [
      {
        path: '',
        component: MenuTypesComponent
      },
      {
        path: 'submenus',
        component: SubMenusComponent
      },
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MenuRoutingModule { }
