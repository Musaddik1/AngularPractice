import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  /* getLogin(url:any){
    return this.http.get(url,{responseType:'text'});
  } */

  getlogin(url:any,data:any){
    return this.http.post(url,data,{headers:new HttpHeaders()})
  }
  getRegister(url:any,data:any){
    return this.http.post(url,data,{headers:new HttpHeaders()})
  }
}
