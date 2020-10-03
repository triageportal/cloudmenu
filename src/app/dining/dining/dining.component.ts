import { MenuService } from './../../menu/menu.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dining',
  templateUrl: './dining.component.html',
  styleUrls: ['./dining.component.scss']
})
export class DiningComponent implements OnInit {
  restaurant: any;
  
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.restaurant = this.menuService.restaurant;
  }

}
