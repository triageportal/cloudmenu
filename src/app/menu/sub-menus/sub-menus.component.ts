import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-menus',
  templateUrl: './sub-menus.component.html',
  styleUrls: ['./sub-menus.component.scss']
})
export class SubMenusComponent implements OnInit {
  submenus: any;
  menuType: any;
  constructor(private menuService: MenuService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.submenus = this.menuService.getSubmenu();   
  }

  goItems(submenu) {
    console.log(submenu); 
  }

}
