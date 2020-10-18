import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  restaurant: any;
  restaurants = [];
  menus: any[];
  menuTypeIndex: any;
  submenuIndex: any;
  flagedItems = {};
  email: string;
  url = 'back.api';

  constructor( private http: HttpClient) { 
    this.restaurantSource.next(this.restaurant)
  }

  isRestaurantExist() {
    if (this.restaurant) {
      if (this.isExpired(this.restaurant.timestamp)) return false;
      return true;
    } else if (JSON.parse(localStorage.getItem('restaurant'))){
      this.restaurant = JSON.parse(localStorage.getItem('restaurant'))
      if (this.isExpired(this.restaurant.timestamp)) return false;
      return true
    } else {
      return false
    }
  }

  isExpired(timestamp) {
    const currentTime = new Date().valueOf();
    const diff = currentTime - timestamp;
    console.log(diff)
    if (diff > 180 * 60 * 1000) {  
      localStorage.removeItem('restaurant');
      return true
    };
    return false;
    
  }

  getRestaurants () {
    return this.restaurants
  }
  
  getMenus() {
    return this.restaurant.menus;
  }

  getSubmenus () {
    const menus = this.getMenus();
    return menus[this.menuTypeIndex]['submenu'];
  }

  getSubmenuName () {
    const submenu = this.getSubmenus();
    return submenu[this.submenuIndex]['name'];
  }

  getSubmenu () {
    const submenu = this.getSubmenus();
    return submenu[this.submenuIndex];
  }

  getSubDescription () {
    const submenu = this.getSubmenus();
    return submenu[this.submenuIndex]['description'];
  }

  getItems() {
    const submenu = this.getSubmenus()
    return submenu[this.submenuIndex]['items'];
  }

  getRestaurant(hash, id) {
    let params = new HttpParams().set('hash', hash).set('id', id);
    return this.http.get<any>(this.url, {params: params});
  }

  getRestaurantsList(email) {
    let params = new HttpParams().set('email', email);
    return this.http.get<any>(this.url, {params: params});
  }

  setRestaurant(restaurant) {
    const currentTime = new Date().valueOf();
    restaurant.timestamp = currentTime;
    this.restaurant = restaurant;
    localStorage.setItem('restaurant', JSON.stringify(restaurant))
    this.restaurantSource.next(restaurant)
  }

  restaurantSource = new Subject<any>();
  restaurantObservable = this.restaurantSource.asObservable();

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
    localStorage.setItem('flaggedItems', JSON.stringify(this.flagedItems));
    return this.flagedItems[restaurantName].length;
  }

  removeFlag (flagedIndex, restaurantName = this.restaurant.name) {
    this.flagedItems[restaurantName].splice(flagedIndex, 1);
    localStorage.setItem('flaggedItems', JSON.stringify(this.flagedItems));
    return this.flagedItems[restaurantName].length;
  }

  getFlagedItems() {
    return this.flagedItems[this.restaurant.name] || [];
  }

  getFlagedItemsFromLocalstorage() {
    this.flagedItems = JSON.parse(localStorage.getItem('flaggedItems'))
  }

  


  /***** Flaged items *****/


}
