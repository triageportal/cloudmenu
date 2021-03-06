import { MenuService } from '../../shared/menu/menu.service';
import { HeaderService } from '../../shared/header/header.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FooterService } from '../../shared/footer/footer.service';

@Component({
  selector: 'app-daily-specials',
  templateUrl: './daily-specials.component.html',
  styleUrls: ['./daily-specials.component.scss']
})
export class DailySpecialsComponent implements OnInit {

  
  flaggedItems: boolean;
  restaurants: any;

  constructor(private headerService: HeaderService, private footerService: FooterService, private menuService: MenuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.headerService.headerTitleSource.next('Daily Specials')
    this.headerService.backButtonSource.next(true);
    this.restaurants = this.menuService.getRestaurants();
    console.log(this.restaurants);
    this.footerService.hideFooterBtns();
  }


  flagItem(item, restaurantIndex) {

    const flagedIndex = this.menuService.getFlagedIndex(item.name, this.restaurants[restaurantIndex]['name']);

    if (flagedIndex == -1) {
      this.addFlag(item, restaurantIndex) 
    } else {
      this.removeFlag(restaurantIndex, flagedIndex)
    }
  }

  addFlag(item, restaurantIndex) {
    this.restaurants[restaurantIndex]['dailySpecials']['flag'] = true;
    this.menuService.addFlag(item, this.restaurants[restaurantIndex]['name']);
  }

  removeFlag(restaurantIndex, flagedIndex) {
    this.restaurants[restaurantIndex]['dailySpecials']['flag'] = false;
    this.menuService.removeFlag(flagedIndex, this.restaurants[restaurantIndex]['name']);
  }

}
