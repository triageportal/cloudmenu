import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MenuService } from '../../menu/menu.service';
import { HeaderService } from '../../header/header.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss']
})
export class PwaComponent implements OnInit {

  restaurant: any;
  dailySpecials = true;
  footerButtons = true;
  
  constructor(private router: Router ,private menuService: MenuService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.restaurant = this.menuService.restaurant;
    this.headerService.dailySpecialsObservable.subscribe(
      result => {
        this.dailySpecials = result;
      }
    )
    this.headerService.footerButtonsObservable.subscribe(
      result => {
        this.footerButtons = result;
      }
    )
  }

  goDailySpecials() {
    this.router.navigate(['pwa/specials']) 
  }

}
