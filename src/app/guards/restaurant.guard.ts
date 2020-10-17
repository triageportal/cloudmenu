import { Injectable }       from '@angular/core';
      import {
        CanActivate, Router,
        ActivatedRouteSnapshot,
        RouterStateSnapshot,
        CanLoad, Route
      }                           from '@angular/router';
import { MenuService } from '../shared/menu/menu.service';
      
      @Injectable({
        providedIn: 'root',
      })
      export class RestaurantGuard implements CanActivate, CanLoad {
        constructor(private menuService: MenuService, private router: Router) {}
      
        canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
          let url: string = state.url;
      
          return this.checkRestaurant();
        }
      
        
      
        canLoad(route: Route): boolean {
          let url = `/${route.path}`;
      
          return this.checkRestaurant();
        }
      
        checkRestaurant(): boolean {
          if (this.menuService.isRestaurantExist()) { return true; }
      
          this.router.navigate(['welcome']);
          return false;
        }
      }