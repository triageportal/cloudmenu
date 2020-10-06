import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PwaComponent } from './pwa/pwa.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';

const routes: Routes = [
  { path: '', 
    component: PwaComponent,
    children: [
      { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
      { path: 'restaurants', component: RestaurantsComponent },
      { path: 'menu', loadChildren: () => import('./../menu/menu.module').then(m => m.MenuModule) }, 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwaRoutingModule { }
