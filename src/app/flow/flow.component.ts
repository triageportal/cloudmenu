import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlowService } from './flow.service';
import { MenuService } from '../shared/menu/menu.service';
import { HeaderService } from '../shared/header/header.service';
import { FooterService } from '../shared/footer/footer.service';

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

  constructor(private footerService: FooterService, private headerService: HeaderService, private router: Router, private menuService: MenuService, private route: ActivatedRoute, private flowService: FlowService) {}

  ngOnInit(): void {
    this.setFlow();
    this.footerService.showEmailRequestBtns();
  }


  setFlow() {
    
    this.headerService.loaderOn();
    if (this.isStandAlone()) {
      this.pwa()
    } else {
      console.log('not pwa')
      const hash = this.route.snapshot.params['flow'];
      this.menuService.getRestaurant(hash, '').subscribe(
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
      )
    }
  }

  pwa() {
    const email = localStorage.getItem('email');
    if (email) {
      this.menuService.getRestaurantsList(email).subscribe(
        result => {
          this.menuService.restaurantsList = result;
          this.router.navigate(['pwa']);
        },
        error => {
          console.log(error);
          this.headerService.loaderOff();
        }
      );
    } else {
      this.emailRequest = true;
    }
  }

  getEmail() {
    const email = localStorage.getItem('email');
    if (!email) {
      return
    } else {
      this.email = email;
      return email;
    }
  }

  isStandAlone() {
    return (window.matchMedia('(display-mode: standalone)').matches);
  }

  validateEmail () {
    if (this.regex.test(this.email)) {
      this.errorMessage = '';
      this.submitEmail()
    } else {
      this.errorMessage = 'Wrong Email Format.'
    }
  }

  submitEmail() {
    
    console.log(this.email);
    
  }
}
