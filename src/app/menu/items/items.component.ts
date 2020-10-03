import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { log } from 'util';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: any;
  submenu: string;
  subDescription: string;

  constructor(private menuService: MenuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if (this.menuService.menuTypeIndex == undefined) {
      this.router.navigate(['./../../'], {relativeTo: this.route})
    } else {
      console.log(this.menuService.menus);
      this.items = this.menuService.getItems();
      this.submenu = this.menuService.getSubmenuName();
      this.subDescription = this.menuService.getSubDescription()
      console.log(this.submenu);
      
    }
    
  }

  flagItem(item) {
    console.log(item);
    console.log(this.menuService.flagedItems);

    const itemIndex = this.items.findIndex(val => {
      return item.name == val.name
    })

    const flagedIndex = this.menuService.flagedItems.findIndex(val => {
      return item.name == val.name
    })
 
    if (flagedIndex == -1) {
      console.log(flagedIndex)
      this.menuService.flagedItems.push(item)
      this.items[itemIndex]['flag'] = true;
    } else {
      console.log(flagedIndex)
      this.menuService.flagedItems.splice(flagedIndex, 1);
      this.items[itemIndex]['flag'] = false;
    }
    console.log(this.menuService.flagedItems);
  }

}
