import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiningComponent } from './dining/dining.component';
import { RestaurantGuard } from '../guards/restaurant.guard';

const routes: Routes = [
  { path: '', 
    component: DiningComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', loadChildren: () => import('../shared/menu/menu.module').then(m => m.MenuModule), canActivate:[RestaurantGuard], canLoad:[RestaurantGuard] }, 
      { path: 'info', loadChildren: () => import('../shared/info/info.module').then(m => m.InfoModule), canActivate:[RestaurantGuard], canLoad:[RestaurantGuard] } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DiningRoutingModule { }
