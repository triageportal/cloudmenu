import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FooterService } from './footer.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  footerBtns: any;

  constructor(private router: Router, private footerService: FooterService) { }

  ngOnInit(): void {
    this.footerBtns = this.footerService.footerBtns;
    this.footerService.footerButtonsObservable.subscribe(
      result => {
        this.footerBtns = result;
      }
    )
  }

  goDailySpecials() {
    this.router.navigate(['pwa/specials']) 
  }

  goInfo() {
    let urls = this.router.url.split('/');
    if (!this.router.url.includes('info')){
      this.router.navigate([`${urls[1]}/info`]) 
    }
  }

}
