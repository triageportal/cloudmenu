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
  constructor(private menuService: MenuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

    console.log(this.menuService.menus);
    this.menus = this.menuService.menus;
    
  }

  goSubmenu(menuTypeIndex) {
    this.menuService.menuTypeIndex = menuTypeIndex;
    this.router.navigate(['submenus'], { relativeTo: this.route })
    
  }
}
