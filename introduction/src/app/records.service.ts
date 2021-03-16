import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  constructor(private http:HttpClient) { }

  
  getData(){
    return this.http.get<myData>("http://localhost:8080/test/data")
  }
}
interface myData{
  srNo:number
  name:string
  online:boolean
}

