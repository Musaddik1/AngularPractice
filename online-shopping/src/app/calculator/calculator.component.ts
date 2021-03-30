import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {

  constructor() { }
  amount:number=0;
  first:any;
  ngOnInit(): void {
  }
  plusValue:any;
  menuItems = ['dashboard', 'sales', 'orders', 'customers', 'products'];

  seven(event:any){
    
    this.amount=this.amount+event.target.value;
    this.first=this.amount;
    console.log(event.target.value)
  }
  eight(event:any){
    this.amount=this.amount+event.target.value;
    this.first=this.amount;
    console.log(event.target.value)
  }
  plus(event:any){
    if(this.amount>0){
    this.amount=this.amount+event.target.value;
    console.log(this.first)
    console.log(event.target.value);
    }
  }
  clear(){
    this.amount=0;
  }
}
