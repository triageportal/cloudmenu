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
  flagedItems = {};

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

  /***** Flaged items *****/

  getFlagedIndex(name){
    if (!(this.flagedItems && this.flagedItems[this.restaurant.name])){
      this.flagedItems[this.restaurant.name] = [];
    } 

    const flagedIndex = this.flagedItems[this.restaurant.name].findIndex(val => {
      return name == val.name
     })

    return flagedIndex;
  }

  addFlag (item) {
    this.flagedItems[this.restaurant.name].push(item)
    return this.flagedItems[this.restaurant.name].length;
  }

  removeFlag (flagedIndex) {
    this.flagedItems[this.restaurant.name].splice(flagedIndex, 1);
    return this.flagedItems[this.restaurant.name].length;
  }

  getFlagedItems() {
    return this.flagedItems[this.restaurant.name];
  }


  /***** Flaged items *****/


}
