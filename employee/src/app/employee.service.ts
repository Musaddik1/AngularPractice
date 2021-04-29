import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  private baseUrl='http://localhost:8080/springboot-crud-rest/api/v1/employee';
  


  getEmployee(id:number):Observable<any>{
    return this.http.get(`${this.baseUrl}/${id}`)
  }

  createEmployee(employee:Object):Observable<Object>{
    return this.http.post(`${this.baseUrl}`,employee);

  }

  updateEmployee(id:number,value:any):Observable<Object>{
    return this.http.put(`${this.baseUrl}/${id}`,value)
  }

  deleteEmployee(id:number):Observable<any>{
    return this.http.delete(`${this.baseUrl}/${id}`,{responseType:'text'});
  }

  getEmployeeList():Observable<any>{
    return this.http.get("http://localhost:8080/springboot-crud-rest/api/v1/employees");
  }

}
