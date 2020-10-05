import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import {Location} from '@angular/common';
import { HeaderService } from './header.service';
import { log } from 'util';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  restaurantName: any;
  flags: number;

  constructor(private menuService: MenuService, private location: Location, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.restaurantName = this.menuService.restaurant.name;
    
    this.headerService.flagsObservable.subscribe(
      result => {
        this.flags = result
      }
    )
  }

  goBack() {
    this.location.back();
  }

}
