import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu.service';
import { Router, ActivatedRoute } from '@angular/router';
import { log } from 'util';
import { HeaderService } from '../../header/header.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.scss']
})
export class ItemsComponent implements OnInit {

  items: any;
  submenuName: string;
  subDescription: string;
  flaggedItems: boolean;
  show = false;
  submenu: any;

  constructor(private headerService: HeaderService, private menuService: MenuService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const url = this.router.url;
    if (this.menuService.menuTypeIndex == undefined && !url.includes('flags')) {
      this.router.navigate(['./../../'], {relativeTo: this.route})
    } else {
      this.route.params.subscribe(
        params => {
          if (params['mode'] == 'flags') {
            this.items = this.menuService.getFlagedItems();
            this.submenuName = 'Your bookmarked items'
            this.flaggedItems = true;
          } else {
            this.flaggedItems = false;
            this.items = this.menuService.getItems();
            this.submenu = this.menuService.getSubmenu();
            this.submenuName = this.submenu.name;
            this.subDescription = this.menuService.getSubDescription()
          }
        }
      )
    }
    this.headerService.backButtonSource.next(true);
  }

  flagItem(item) {
    const itemIndex = this.items.findIndex(val => {
      return item.name == val.name
    })

    const flagedIndex = this.menuService.getFlagedIndex(item.name);

    if (flagedIndex == -1) {
      this.addFlag(itemIndex, item) 
    } else {
      this.removeFlag(itemIndex, flagedIndex)
    }
  }

  addFlag(itemIndex, item) {
    this.items[itemIndex]['flag'] = true;
    const totalFlagedItems = this.menuService.addFlag(item);
    this.headerService.flagsSource.next(totalFlagedItems);  
  }

  removeFlag(itemIndex, flagedIndex) {
    this.items[itemIndex]['flag'] = false;
    const totalFlagedItems = this.menuService.removeFlag(flagedIndex);
    this.headerService.flagsSource.next(totalFlagedItems);
  }

  modsModal(){
    this.show = true
    console.log(this.show);
    
    console.log(this.submenu);
    
  }

}
