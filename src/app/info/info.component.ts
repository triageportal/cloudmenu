import { HeaderService } from './../header/header.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  restaurant: any;
  week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  constructor(private router: Router, private menuService: MenuService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.restaurant = this.menuService.restaurant;
    console.log(this.restaurant);
    this.headerService.backButtonSource.next(true);
    this.headerService.headerTitleSource.next(this.restaurant.name);
    console.log(this.restaurant.name)
  }

  goFlagedItems() {
    let urls = this.router.url.split('/');
    if (!this.router.url.includes('flags')){
      this.router.navigate([`${urls[1]}/menu/items/flags`]) 
    }
  }

}
