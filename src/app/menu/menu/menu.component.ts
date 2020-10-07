import { HeaderService } from './../../header/header.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: any;
  constructor(private menuService: MenuService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.headerService.backButtonSource.next(false); 
    if (this.menuService.flagedItems[this.menuService.restaurant.name]) {
      this.headerService.flagsSource.next(this.menuService.flagedItems[this.menuService.restaurant.name].length)
    }
  }

  ngOnDestroy(): void {
    console.log('destr');
    
    this.headerService.flagsSource.next(false)
    
  }
}
