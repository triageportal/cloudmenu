import { MenuService } from './../../menu/menu.service';
import { HeaderService } from './../../header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { restaurants } from '../../data/restaurants';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  menus: any;
  restaurants = restaurants;

  constructor(private headerService: HeaderService, private menuService: MenuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.headerService.backButtonSource.next(false);
  }

  goMenu(restaurant) {
    this.menuService.restaurant = restaurant;
    this.router.navigate(['../menu'], { relativeTo: this.route })
  }

}
