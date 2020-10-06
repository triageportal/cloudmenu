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


  
}
