import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private userservice:UserService,
    private snackbar:MatSnackBar,private router:Router) { }
  user:User=new User();
  ngOnInit(): void {
  }

  onSubmit(){
    
    this.userservice.addUser("http://localhost:8080/api/v1/add",this.user)
    .subscribe((response:any):any=>{
      if(response.status==200){
        this.snackbar.open("user saved","close",{duration:2500});
        this.router.navigateByUrl('dashboard/list')
      }else{
        this.snackbar.open("user not found","close",{duration:2500});
        
      }
     
    })
  }
}
