import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataServiceService } from '../data-service.service';
import { UpdateUserComponent } from '../update-user/update-user.component';
import { User } from '../user';
import { UserService } from '../user.service';
/* 
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
]; */

/* export interface PeriodicElement {
  id:number;
  name: string;
  email:string;
  
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, name: 'Mechale', email:"mechale@gmail.com"},
  {id: 2, name: 'Jimmy',  email:"jimmy@gmail.com"},
  {id: 3, name: 'Morgan',  email:"morgan@gmail.com"},
  {id: 4, name: 'Jessica', email:"jessica@gmail.com"},
 
]; */


@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {

  constructor(private userservice:UserService,
    private snackbar:MatSnackBar,private dialog:MatDialog,
    private dataservice:DataServiceService) { }

  ngOnInit(): void {
    this.dataservice.currentMessage.subscribe(message=>{
      this.getUser();
    })
    this.getUser();
  }
  displayedColumns: string[] = ['id', 'name', 'email','delete','update'];
  dataSource :any;
  user:User=new User();
  getUser(){
    this.userservice.getUser("http://localhost:8080/api/v1/user")
    .subscribe(data=>{
      this.dataSource=data;
    })
  }

  delete(event:any){
  
    this.userservice.deleteUser("http://localhost:8080/api/v1/user?id="+event)
    .subscribe((response:any):any=>{
      console.log(response)
      if(response.status==200){
        this.snackbar.open("user delete","close",{duration:2500});
        this.getUser();
      }else{
        this.snackbar.open("user not found","close",{duration:2500});
      }
    })
  }
  
  openDialog(element:any){
    console.log(element);
    const dialogRe=this.dialog.open(UpdateUserComponent,{
      width:"50%",
      height:"300px",
      data:{
        id:element.id,
        name:element.name,
        email:element.email

      }
    });
    console.log("open dialog")
  }

  
  isChecked = false;
  checkuncheckall()
  {
    if(this.isChecked == true)
  {
  this.isChecked = false;
  }
  else
  {
  this.isChecked = true;
  }
  
  } 
}
