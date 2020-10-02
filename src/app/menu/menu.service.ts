import { Injectable } from '@angular/core';
import { restaurant } from '../data/restaurant';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  restaurant = restaurant;
  menus = restaurant.menu;

constructor() { 
}

}
