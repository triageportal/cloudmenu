import { restaurantsList } from './../data/restaurantlist';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlowService } from './flow.service';
import { MenuService } from '../shared/menu/menu.service';
import { HeaderService } from '../shared/header/header.service';
import { FooterService } from '../shared/footer/footer.service';
import { restaurants } from '../data/restaurants';

@Component({
  selector: 'app-flow',
  templateUrl: './flow.component.html',
  styleUrls: ['./flow.component.scss']
})
export class FlowComponent implements OnInit {
  email: string;
  emailRequest = true;
  regex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
  errorMessage: string = '';
  restaurants = restaurantsList;
  fullrestaurants = restaurants;

  constructor(private footerService: FooterService, private headerService: HeaderService, private router: Router, private menuService: MenuService, private route: ActivatedRoute, private flowService: FlowService) {}

  ngOnInit(): void {
    this.setFlow();
    this.footerService.showEmailRequestBtns();
  }


  setFlow() {
    
    //this.headerService.loaderOn();
    if (this.isStandAlone()) {
      this.pwa()
    } else {
      console.log('not pwa')
      const hash = this.route.snapshot.params['flow'];
      if (hash) {
        this.headerService.loaderOff();
        console.log(this.fullrestaurants);
        
        this.menuService.setRestaurant(this.fullrestaurants[3]);
        if(hash == 'takeout') {
          this.router.navigate(['takeout'])
        } else {
          this.router.navigate(['dining'])
        }
        /* this.menuService.getRestaurant(hash, '').subscribe(
          result => {
            this.headerService.loaderOff();
            this.menuService.setRestaurant(result);
            if (result.table) {
              this.router.navigate(['dining'])
            } else {
              this.router.navigate(['takeout'])
            }        
          },
          error => {
            console.log(error);
            this.headerService.loaderOff();
          }
        ) */
      } else {
        this.router.navigate(['./../welcome']);
      }
    }
  }

  pwa() {
    const email = localStorage.getItem('email');
    if (email) {
      this.menuService.restaurants = this.restaurants
      this.router.navigate(['pwa']);
      /* this.menuService.getRestaurantsList(email).subscribe(
        result => {
          this.menuService.restaurants = result;
          this.router.navigate(['pwa']);
        },
        error => {
          console.log(error);
          this.headerService.loaderOff();
        }
      ); */
    } else {
      this.emailRequest = true;
    }
  }

  isStandAlone() {
    //return true
    return (window.matchMedia('(display-mode: standalone)').matches);
  }

  validateEmail () {
    this.email = this.email.replace(/\s+/g, '');
    if (this.regex.test(this.email)) {
      this.errorMessage = '';
      localStorage.setItem('email', this.email);
      this.pwa()
    } else {
      if (this.errorMessage == '' || this.errorMessage == undefined) {
        this.errorMessage = 'Enter valid email.'
        this.email = '';
      } else {
        this.errorMessage = 'Wrong email format.'
      }      
    }
  }

}
