import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.sass']
})
export class UpdateEmployeeComponent implements OnInit {

  id:any;
  employee:Employee=new Employee();

  constructor(private route:ActivatedRoute,
    private router:Router,
    private employeeservice:EmployeeService) { }

  ngOnInit(): void {

    this.employee=new Employee();
    this.id=this.route.snapshot.params['id'];

    this.employeeservice.getEmployee(this.id)
    .subscribe(data=>{
      console.log(data)
      this.employee=data
    },error=>console.log(error))
  }

  updateEmployee(){
    this.employeeservice.updateEmployee(this.id,this.employee)
    .subscribe(data=>{
      console.log(data)
      this.employee=new Employee()
      this.gotoList();
    },error=>console.log(error));
  }

  onSubmit(){
    this.updateEmployee();
  }
  gotoList(){
    this.router.navigate(['/employees'])
  }

}
