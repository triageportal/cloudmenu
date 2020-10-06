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
  restaurantName: any;
  flags: number;
  backButton = false;

  constructor(private route: ActivatedRoute ,private router: Router ,private menuService: MenuService, private location: Location, private headerService: HeaderService) { }

  ngOnInit(): void {
    this.restaurantName = this.menuService.restaurant.name;
        
    this.headerService.flagsObservable.subscribe(
      result => {
        this.flags = result 
      }
    )

    this.headerService.backButtonObservable.subscribe(
      result => {
        this.backButton = result
      }
    )
  }


  goBack() {
    this.location.back();
  }

  goFlagedItems() {
    if (!this.router.url.includes('flags')){
      this.router.navigate([`${this.router.url}/flags`], { relativeTo: this.route})
    }
  }

}
