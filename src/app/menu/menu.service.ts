import { Injectable } from '@angular/core';
import { restaurant } from '../data/restaurant';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  restaurant = restaurant;
  menus: any[];
  menuTypeIndex: any;
  submenuIndex: any;
  restaurantIndex: any;
  flagedItems: any[] = [];

  constructor() { 
  }


  
  getMenus() {
    return this.restaurant.menus;
  }

  getSubmenu () {
    const menus = this.getMenus();
    return menus[this.menuTypeIndex]['submenu'];
  }

  getSubmenuName () {
    const submenu = this.getSubmenu();
    return submenu[this.submenuIndex]['name'];
  }

  getSubDescription () {
    const submenu = this.getSubmenu();
    return submenu[this.submenuIndex]['description'];
  }

  getItems() {
    const submenu = this.getSubmenu()
    return submenu[this.submenuIndex]['items'];
  }

}
