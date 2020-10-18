import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pwa',
  templateUrl: './pwa.component.html',
  styleUrls: ['./pwa.component.scss']
})
export class PwaComponent implements OnInit {

  restaurant: any;
  dailySpecials = true;
  footerButtons = true;
  
  constructor(private router: Router) { }

  ngOnInit(): void {
    
  }

  goDailySpecials() {
    this.router.navigate(['pwa/specials']) 
  }

}
