import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TakeoutComponent } from './takeout/takeout.component';

const routes: Routes = [
  { path: '', 
    component: TakeoutComponent,
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      { path: 'menu', loadChildren: () => import('./../menu/menu.module').then(m => m.MenuModule) }, 
      { path: 'info', loadChildren: () => import('./../info/info.module').then(m => m.InfoModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TakeoutRoutingModule { }
