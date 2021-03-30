import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


interface Country{
  id:number;
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
    return this.http.get<Country>(url);
  }

  public getCurrency(url:any){
    return this.http.get(url,{responseType:"text"})
  }

  public getContact(url:any){
    return this.http.get(url);
  }
  public getTable(url:any){
    return this.http.get(url);
  }
}
