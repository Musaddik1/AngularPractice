import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../customer';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class EmployeeComponent implements OnInit {

  constructor(private employee:EmployeeService,
    private snackbar:MatSnackBar) { }
  customer:Customer=new Customer();
  ngOnInit(): void {
  }

  register(){
    debugger
    this.employee.createCustomer(this.customer)
    .subscribe(data=>{
      this.snackbar.open("registeration done","close",{duration:2500})
    })
      }
}
