import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { error } from 'selenium-webdriver';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.sass']
})
export class EmployeeListComponent implements OnInit {

  employees:Observable<Employee[]> | undefined
  constructor(private employeeservice:EmployeeService,private router:Router) { }

  ngOnInit(): void {

    this.reloadData();
  }

  reloadData(){
    this.employees=this.employeeservice.getEmployeeList();
  }

  deleteEmployee(id:number){
    this.employeeservice.deleteEmployee(id)
    .subscribe(
      data=>{
        console.log(data)
        this.reloadData();
      },
      error=>console.log(error));
  }

  employeeDetails(id:number){
    this.router.navigate(['details',id])
  }
}
 