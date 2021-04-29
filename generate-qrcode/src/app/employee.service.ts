import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }


  createCustomer(customer:any){
    return this.http.post("http://localhost:8080/springboot-crud-rest/api/v1/customer",customer);
  }
}