import { HeaderService } from '../../header/header.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { FooterService } from '../../footer/footer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  menus: any;
  constructor(private router: Router, private footerService: FooterService, private menuService: MenuService, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.setFooterBtns();
    if (this.menuService.flagedItems[this.menuService.restaurant.name]) {
      this.headerService.flagsSource.next(this.menuService.flagedItems[this.menuService.restaurant.name].length)
    }
  }
  setFooterBtns() {
    const url = this.router.url.split('/');
    switch (url[1]) {
      case 'pwa': this.footerService.showPwaBtns(); break;
      case 'takeout': this.footerService.showTakeoutBtns(); break;
      case 'dining': this.footerService.showDiningBtns(); break;    
    }
  }

  ngOnDestroy(): void {
    this.headerService.flagsSource.next(false)
  }
}
