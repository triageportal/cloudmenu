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

  restaurants = restaurants;

  constructor(private headerService: HeaderService, private menuService: MenuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.headerService.backButtonSource.next(false);
    this.headerService.headerTitleSource.next('Cloud Menu');
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.headerService.dailySpecialsSource.next(true)
      this.headerService.footerButtonsSource.next(true)
    })
  }

  goMenu(restaurant) {
    this.menuService.restaurant = restaurant;
    this.headerService.headerTitleSource.next(restaurant.name)
    this.router.navigate(['../menu'], { relativeTo: this.route })
  }

  ngOnDestroy(): void {
    this.headerService.dailySpecialsSource.next(false)
  }

}
