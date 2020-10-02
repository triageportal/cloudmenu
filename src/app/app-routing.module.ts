import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', redirectTo: 'takeout', pathMatch: 'full'},
  { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) }, 
  { path: 'takeout', loadChildren: () => import('./takeout/takeout.module').then(m => m.TakeoutModule) },
  { path: 'dining', loadChildren: () => import('./dining/dining.module').then(m => m.DiningModule) },
  { path: 'pwa', loadChildren: () => import('./pwa/pwa.module').then(m => m.PwaModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
