import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FlowService {

email: string;
url = 'back.api';

constructor(private http: HttpClient) { }

  getEmail() {
    const email = localStorage.getItem('email');
    if (!email) {
      this.requestEmail();
    } else {
      this.email = email;
      return email;
    }
  }

  requestEmail() {

  }

  getFlow(hash) {
    let params = new HttpParams().set('hash', hash);
    return this.http.get<any>(this.url, {params: params});
  }

}
