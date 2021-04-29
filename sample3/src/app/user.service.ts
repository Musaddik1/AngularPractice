import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser(url:any){
    return this.http.get(url);
  }

  addUser(url:any,user:User){
    return this.http.post(url,user);
  }
  deleteUser(url:any){
    return this.http.delete(url);
  }

  updateUser(url:any,user:User){
    return this.http.put(url,user);
  }
}
