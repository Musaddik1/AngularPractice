import { Component, OnInit } from '@angular/core';
import { Details } from '../details';




@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.scss']
})

export class MainpageComponent implements OnInit {

  constructor() { }
  amount:any;
  description:any;
  ngOnInit(): void {
  }
  check:any=false;
  data: Details = new Details;
  details: Details[] = [];
  amount1:any;
  description1:any;
  

  onClick(){
    
    this.data.amount=this.amount;
    this.data.description=this.description;
    this.data.check=true;
    this.details.push(this.data);
    this.data=new Details();
    this.amount1=this.amount;
    this.description1=this.description;
   


    
  }

}
