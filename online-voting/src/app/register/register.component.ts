import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private http:HttpService,
    private snackbar:MatSnackBar,
    private router:Router) { }

  register:Register=new Register();

  ngOnInit(): void {
  }
  onRegister(){
    
    this.http.register("http://localhost:8080/admin/register",this.register)
    .subscribe((response:any)=>{
      if(response.status==200){
        console.log("register succesfull");
        this.snackbar.open("register succesfull","close",{duration:2500})
      }else{
        console.log("regiteration unsuccessfull");
        this.snackbar.open("somthing went wrong","close",{duration:2500})
      }
    }
    )
  }
}
