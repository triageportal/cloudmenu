import { Component, OnInit } from '@angular/core';
import { MenuService } from '../menu/menu.service';
import {Location} from '@angular/common';
import { HeaderService } from './header.service';
import { log } from 'util';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerTitle = 'Cloud Menu';
  flags: number;
  backButton = false;

  constructor(private route: ActivatedRoute ,private router: Router ,private menuService: MenuService, private location: Location, private headerService: HeaderService) { }

  ngOnInit(): void {
        
    this.headerService.flagsObservable.subscribe(
      result => {
        this.flags = result 
      }
    )

    this.headerService.backButtonObservable.subscribe(
      result => {
        this.backButton = result;
      }
    )

    this.headerService.headerTitleObservable.subscribe (
      result => {
        this.headerTitle = result;
      }
    )
  }


  goBack() {
    const urls = this.router.url.split('/');
    const last = urls[urls.length - 1];
    switch (last) {
      case 'flags':   this.router.navigate([`${urls[1]}/menu/items`]); break;
      case 'items':   this.router.navigate([`${urls[1]}/menu/submenus`]); break;
      case 'submenus':   this.router.navigate([`${urls[1]}/menu`]); break;
      case 'menu':   this.router.navigate([`${urls[1]}/restaurants`]); break;
      case 'specials':   this.router.navigate([`${urls[1]}/restaurants`]); break;
    }
  }

  goFlagedItems() {
    let urls = this.router.url.split('/');
    if (!this.router.url.includes('flags')){
      this.router.navigate([`${urls[1]}/menu/items/flags`]) 
    }
  }

}
