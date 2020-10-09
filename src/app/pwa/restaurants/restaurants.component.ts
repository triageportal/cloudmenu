import { FooterService } from './../../footer/footer.service';
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

  constructor(private footerService: FooterService, private headerService: HeaderService, private menuService: MenuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.headerService.backButtonSource.next(false);
    this.headerService.headerTitleSource.next('Cloud Menu');
    this.footerService.showDailySpecialsBtn();
  }

  goMenu(restaurant) {
    this.menuService.restaurant = restaurant;
    this.headerService.headerTitleSource.next(restaurant.name);
    this.footerService.showPwaBtns();
    this.router.navigate(['../menu'], { relativeTo: this.route })
  }


}
