import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface MyCountry{
  code:any;
  countrycode:any;
  countryname:any
  url:any;
}
@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  constructor(private http:HttpClient) { }

  public getCountry(url:any){
    return this.http.get<MyCountry>(url);
  }

  public getCurrency(url:any){
    return this.http.get(url,{responseType:"text"})
  }

  public getContact(url:any){
    return this.http.get(url);
  }
}
