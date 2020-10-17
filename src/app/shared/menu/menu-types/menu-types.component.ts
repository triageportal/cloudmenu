import { HeaderService } from '../../header/header.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu-types',
  templateUrl: './menu-types.component.html',
  styleUrls: ['./menu-types.component.scss']
})
export class MenuTypesComponent implements OnInit {

  menus: any;
  constructor(private headerService: HeaderService, private menuService: MenuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.headerService.loaderOff()
    this.setBackButton();
    this.menus = this.menuService.getMenus();
  }

  setBackButton() {
    if (this.router.url.includes('pwa')) {
      this.headerService.backButtonSource.next(true);
    } else {
      this.headerService.backButtonSource.next(false);
    }
  }

  goSubmenu(menuTypeIndex) {
    this.menuService.menuTypeIndex = menuTypeIndex;
    this.router.navigate(['submenus'], { relativeTo: this.route })
  }
}
