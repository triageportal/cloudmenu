import { CanActivate, CanLoad, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Statement } from '@angular/compiler';
import { MenuService } from '../shared/menu/menu.service';


@Injectable({providedIn: 'root'})

export class PwaGuard implements CanActivate, CanLoad {
    constructor(private router: Router, private menuService: MenuService) {}

    canActivate():boolean{       
        return this.checkPwa();
    }

    canLoad():boolean {
        return this.checkPwa();
    }

    checkPwa () {
        if (this.menuService.restaurants && this.menuService.restaurants.length > 0) return true;
        this.router.navigate(['/']);
        return false
    }
}