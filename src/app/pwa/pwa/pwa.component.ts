import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { MenuService } from '../../shared/menu/menu.service';
import { HeaderService } from '../../shared/header/header.service';
import { Router } from '@angular/router';
import { FooterService } from '../../shared/footer/footer.service';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss']
})
export class PwaComponent implements OnInit {

  restaurant: any;
  dailySpecials = true;
  footerButtons = true;
  
  constructor(private footerService: FooterService, private router: Router ,private menuService: MenuService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.restaurant = this.menuService.restaurant;
    
  }

  goDailySpecials() {
    this.router.navigate(['pwa/specials']) 
  }

}
