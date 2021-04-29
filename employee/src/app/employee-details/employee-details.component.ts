import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.sass']
})
export class EmployeeDetailsComponent implements OnInit {

  id:any;
  employee:Employee=new Employee();

  constructor(private route:ActivatedRoute,
    private router:Router,
    private employeeservice:EmployeeService) { }

  ngOnInit(): void {
    this.employee=new Employee();
    this.id=this.route.snapshot.params['id']

    this.employeeservice.getEmployee(this.id)
    .subscribe(data=>{
      console.log(data);
      this.employee=data;
    },error=>console.log(error));
  }
  list(){
    this.router.navigate(['employees'])
  }

}
