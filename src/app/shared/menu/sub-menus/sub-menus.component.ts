import { HeaderService } from '../../../header/header.service';
import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-menus',
  templateUrl: './sub-menus.component.html',
  styleUrls: ['./sub-menus.component.scss']
})
export class SubMenusComponent implements OnInit {
  submenus: any;
  menuType: any;
  constructor(private headerService: HeaderService, private menuService: MenuService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    if (this.menuService.menuTypeIndex == undefined) {
      this.router.navigate(['./../'], {relativeTo: this.route})
    } else {
      this.submenus = this.menuService.getSubmenus();   
    }
    this.headerService.backButtonSource.next(true);
  }

  goItems(submenuIndex) {
    this.menuService.submenuIndex = submenuIndex;
    this.router.navigate(['../items'], { relativeTo: this.route })
  }

}
