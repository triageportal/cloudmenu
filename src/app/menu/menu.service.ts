import { Injectable } from '@angular/core';
import { restaurant } from '../data/restaurant';
import { restaurants } from '../data/restaurants';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  restaurant = restaurant;
  restaurants = restaurants;
  menus: any[];
  menuTypeIndex: any;
  submenuIndex: any;
  flagedItems = {};

  constructor() { 
  }

  getRestaurants () {
    return this.restaurants
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

  getFlagedIndex(name, restaurantName = this.restaurant.name){
    if (!(this.flagedItems && this.flagedItems[restaurantName])){
      this.flagedItems[restaurantName] = [];
    } 

    const flagedIndex = this.flagedItems[restaurantName].findIndex(val => {
      return name == val.name
     })

    return flagedIndex;
  }

  addFlag (item, restaurantName = this.restaurant.name) {
    this.flagedItems[restaurantName].push(item)
    return this.flagedItems[restaurantName].length;
  }

  removeFlag (flagedIndex, restaurantName = this.restaurant.name) {
    this.flagedItems[restaurantName].splice(flagedIndex, 1);
    return this.flagedItems[restaurantName].length;
  }

  getFlagedItems() {
    return this.flagedItems[this.restaurant.name];
  }


  /***** Flaged items *****/


}
