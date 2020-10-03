import { Component, OnInit } from '@angular/core';
import { MenuService } from '../../menu/menu.service';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss']
})
export class PwaComponent implements OnInit {

  restaurant: any;
  
  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.restaurant = this.menuService.restaurant;
  }

}
