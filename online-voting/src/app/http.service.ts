import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient,private route:ActivatedRoute) { }
  baseUrl=environment.baseUrl;
  token=this.route.snapshot.paramMap.get('token')
  
  getLogin(url:any){
    console.log("token",this.token)
    return this.http.post(url,null,{headers:new HttpHeaders().set("token",localStorage.getItem('token')||'')});
  }
  register(url:any,data:any){
    return this.http.post(url,data);
  }

  getCandidates(url:any){
    return this.http.post(url,null,{headers:new HttpHeaders().set('token',localStorage.getItem('token')||'')})
  }
  getvoterCandidates(url:any){
    console.log(this.baseUrl+url);
    return this.http.post(this.baseUrl+url,null,{headers:new HttpHeaders().set('token',localStorage.getItem('token')||'')})
  }
  giveVote(url:any){
    return this.http.post(url,null,{headers:new HttpHeaders().set('token',localStorage.getItem('token')||'')})
  }
}
