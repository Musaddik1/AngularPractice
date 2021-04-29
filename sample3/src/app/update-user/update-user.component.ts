import { ThisReceiver } from '@angular/compiler';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DataServiceService } from '../data-service.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.scss']
})
export class UpdateUserComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private userservice:UserService,
  private snackbar:MatSnackBar,
  private router:Router,
  private dialog:MatDialog,
  private dataservice:DataServiceService) { }
  user:User=new User();
  ngOnInit(): void {
    console.log(this.data);
    this.user=this.data;
      }

  
  onSubmit(){
    this.userservice.updateUser("http://localhost:8080/api/v1/user",this.user)
    .subscribe((response:any):any=>{
      if(response.status==200){
        this.dataservice.changeMessage("updated user");
        this.snackbar.open("user updated","close",{duration:2500})
                  this.router.navigateByUrl('dashboard/list')
      }else{
        this.snackbar.open("user not found","close",{duration:2500});
      }
      this.dialog.closeAll();
    })
  }
}
