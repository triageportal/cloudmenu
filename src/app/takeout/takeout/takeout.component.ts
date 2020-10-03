import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu/menu.service';

@Component({
  selector: 'app-takeout',
  templateUrl: './takeout.component.html',
  styleUrls: ['./takeout.component.scss']
})
export class TakeoutComponent implements OnInit {
  restaurant: any;

  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.restaurant = this.menuService.restaurant;
  }

}
