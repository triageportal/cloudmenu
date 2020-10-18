import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { PwaComponent } from './pwa/pwa.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DailySpecialsComponent } from './daily-specials/daily-specials.component';
import { PwaGuard } from '../guards/pwa.guard';

const routes: Routes = [
  { path: '', 
    component: PwaComponent,
    children: [
      { path: '', redirectTo: 'restaurants', pathMatch: 'full' },
      { path: 'restaurants', component: RestaurantsComponent, canLoad: [PwaGuard], canActivate: [PwaGuard] },
      { path: 'specials', component: DailySpecialsComponent},
      { path: 'menu', loadChildren: () => import('../shared/menu/menu.module').then(m => m.MenuModule), canLoad: [PwaGuard], canActivate: [PwaGuard]}, 
      { path: 'info', loadChildren: () => import('../shared/info/info.module').then(m => m.InfoModule), canLoad: [PwaGuard], canActivate: [PwaGuard] }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PwaRoutingModule { }
