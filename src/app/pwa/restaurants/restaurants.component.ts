import { FooterService } from '../../shared/footer/footer.service';
import { MenuService } from '../../shared/menu/menu.service';
import { HeaderService } from '../../shared/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { restaurants } from '../../data/restaurants';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.scss']
})
export class RestaurantsComponent implements OnInit {

  restaurants = [];

  constructor(private footerService: FooterService, private headerService: HeaderService, private menuService: MenuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.restaurants = this.menuService.getRestaurants();
    if (this.restaurants.length == 0) this.router.navigate(['./../../']);
    this.headerService.loaderOff()
    this.headerService.backButtonSource.next(false);
    this.headerService.headerTitleSource.next('Cloud Menu');
    this.footerService.showDailySpecialsBtn();
  }

  getRestaurant (id: any) {
    this.menuService.getRestaurant('', id).subscribe(
      result => {
        this.goMenu(result);
      },
      error => {
        console.log(error);
        this.headerService.loaderOff();
      }
    )
  }

  goMenu(restaurant) {
    this.menuService.setRestaurant(restaurant);
    this.headerService.headerTitleSource.next(restaurant.name);
    this.footerService.showPwaBtns();
    this.router.navigate(['../menu'], { relativeTo: this.route })
    this.menuService.restaurantSource.next(restaurant.info)
  }


}
