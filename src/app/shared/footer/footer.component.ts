import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from './footer.service';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerBtns: any;
  restaurantInfo: any;
  restaurant: any;

  @Output() emailEmit = new EventEmitter<void>();

  constructor(private router: Router, private footerService: FooterService, private menuService: MenuService) { }

  ngOnInit(): void {
    this.footerBtns = this.footerService.footerBtns;
    this.footerService.footerButtonsObservable.subscribe(
      result => {
        this.footerBtns = result;
      }
    )
    this.restaurantInfo = this.menuService.restaurant.info;
    this.menuService.restaurantObservable.subscribe(
      result => {
        this.restaurantInfo = result
      }
    )
  }

  goDailySpecials() {
    this.router.navigate(['pwa/specials']) 
  }

  goInfo() {
    let urls = this.router.url.split('/');
    if (!this.router.url.includes('info')){
      console.log(urls[1]);
      
      this.router.navigate([`${urls[1]}/info`]) 
    }
  }

  goFlagedItems() {
    const urls = this.router.url.split('/');
    const flagedItems = this.menuService.getFlagedItems();
    if (flagedItems.length > 0 && !this.router.url.includes('flags')){
      this.router.navigate([`${urls[1]}/menu/items/flags`]) 
    }
  }

  submitEmail() {
    this.emailEmit.emit();
  }

}
