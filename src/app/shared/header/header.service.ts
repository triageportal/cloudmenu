import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

constructor() { }

  flagsSource = new Subject<any>();
  flagsObservable = this.flagsSource.asObservable();
  
  backButtonSource = new Subject<any>();
  backButtonObservable = this.backButtonSource.asObservable();
  
  headerTitleSource = new Subject<any>();
  headerTitleObservable = this.headerTitleSource.asObservable();

  loaderSource = new Subject<any>();
  loaderObservable = this.loaderSource.asObservable();
  
  loaderOn() {
    this.loaderSource.next(true)
  }
  
  loaderOff() {
    this.loaderSource.next(false)
  }


}
