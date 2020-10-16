import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  footerBtns = {
    dailySpecials: false,
    info: false,
    phone: false,
    mail: false,
    web: false,
    home: false,
    bell: false,
    bill: false,
    save: false,
    view: false,
    cloud: false,
    arrowRight: false
  }

constructor() { }

  dailySpecialsSource = new Subject<any>();
  dailySpecialsObservable = this.dailySpecialsSource.asObservable();

  footerButtonsSource = new Subject<any>();
  footerButtonsObservable = this.footerButtonsSource.asObservable();
  
  showDailySpecialsBtn(){
    this.footerBtns.dailySpecials = true;
    this.footerButtonsSource.next(this.footerBtns)
  }

  showPwaBtns() {
    this.hideFooterBtns();
    this.footerBtns.info = true;
    this.footerBtns.phone = true;
    this.footerButtonsSource.next(this.footerBtns)
  }

  showInfoBtns() {
    this.hideFooterBtns();
    this.footerBtns.mail = true;
    this.footerBtns.web = true;
    this.footerBtns.phone = true;
    this.footerButtonsSource.next(this.footerBtns)
  }

  showTakeoutBtns() {
    this.hideFooterBtns();
    this.footerBtns.info = true;
    this.footerBtns.cloud = true;
    this.footerBtns.phone = true;
    this.footerButtonsSource.next(this.footerBtns)
  }

  showDiningBtns() {
    this.hideFooterBtns();
    this.footerBtns.bell = true;
    this.footerBtns.bill = true;
    this.footerBtns.save = true;
    this.footerBtns.view = true;
    this.footerButtonsSource.next(this.footerBtns)
  }

  showEmailRequestBtns() {
    this.hideFooterBtns();
    this.footerBtns.arrowRight = true;
    this.footerButtonsSource.next(this.footerBtns)
  }

  

  hideFooterBtns() {
    this.footerBtns = {
      dailySpecials: false,
      info: false,
      phone: false,
      mail: false,
      web: false,
      home: false,
      bell: false,
      bill: false,
      save: false,
      view: false,
      cloud: false,
      arrowRight: false
    }
    this.footerButtonsSource.next(this.footerBtns)
  }
}
