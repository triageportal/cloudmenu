import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowComponent } from './flow/flow.component';


const routes: Routes = [
  {path: '', redirectTo: 'flow', pathMatch: 'full'},
  { path: 'flow', component: FlowComponent}, 
  { path: 'menu', loadChildren: () => import('./shared/menu/menu.module').then(m => m.MenuModule) }, 
  { path: 'takeout', loadChildren: () => import('./takeout/takeout.module').then(m => m.TakeoutModule) },
  { path: 'dining', loadChildren: () => import('./dining/dining.module').then(m => m.DiningModule) },
  { path: 'pwa', loadChildren: () => import('./pwa/pwa.module').then(m => m.PwaModule) },
  { path: 'info', loadChildren: () => import('./shared/info/info.module').then(m => m.InfoModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
