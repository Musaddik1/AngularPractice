import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.sass']
})
export class CreateEmployeeComponent implements OnInit {

  constructor(private employeeservice:EmployeeService,
    private router:Router) { }
  employee:Employee=new Employee();
  submitted=false;
  ngOnInit(): void {

  }
  newEmployee():void{
    this.submitted=false;
    this.employee=new Employee();
  }

  save(){
    this.employeeservice.createEmployee(this.employee)
    .subscribe(data=>{
      console.log(data)
      this.employee=new Employee();
      this.gotoList();
    },
    error=>console.log(error));
  }

  Onsubmit(){
    this.submitted=true;
    this.save();
  }
  gotoList(){
    this.router.navigate(['/employees'])
  }

}
