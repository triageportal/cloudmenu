import { Injectable } from '@angular/core';
import { restaurant } from '../data/restaurant';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  restaurant = restaurant;
  menus = restaurant.menu;
  menuTypeIndex: any;
  submenuIndex: any;
  flagedItems: any[] = [];

  constructor() { 
  }


  flagItem(){
    
  }

  getSubmenu () {
    return this.menus[this.menuTypeIndex]['submenu'];
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
