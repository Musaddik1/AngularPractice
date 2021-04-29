import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeComponent } from '../customer/customer.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  customers=[
    {id:1,name:"Musaddik",mobile:"9823139449",username:"Musaddik4"},
    {id:2,name:"Ahmed",mobile:"9823139449",username:"Musaddik3"},
    {id:3,name:"Shaikh",mobile:"9823139449",username:"Musaddik2"},
    {id:4,name:"Ishaque",mobile:"9823139449",username:"Musaddik1"},
    {id:4,name:"Ishaque",mobile:"9823139449",username:"Musaddik1"},
    {id:4,name:"Ishaque",mobile:"9823139449",username:"Musaddik1"},
    {id:4,name:"Ishaque",mobile:"9823139449",username:"Musaddik1"} 
  ]
list=false;
  ngOnInit(): void {
    this.grid=true;
    
  }
  grid=false;
  gridView(){
    if(!this.grid){
      this.grid=true;
      this.list=false;
    }else{
      this.grid=true;
    }
  }
  listView(){
    if(!this.list){
      this.list=true;
      this.grid=false;
    }else{
      this.list=false;
    }
  }

  openDialog(){
    const dialogRef=this.dialog.open(EmployeeComponent);
    console.log("dialog open");
    
  } 
  

}