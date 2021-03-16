import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Register } from '../register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private loginservice:LoginService,private router:Router,private snackbar:MatSnackBar) { }
    hide:any;
    register:Register=new Register();
    ngOnInit(): void {
  }
  Onregister(){


    this.loginservice.getRegister("http://localhost:8080/appservice/register",this.register)
    .subscribe(
      (response:any):any=>{

        if(response.statusCode==200){
          console.log(response.message);
          this.snackbar.open(response.message,"close",{duration:5000});
          this.router.navigateByUrl("/login");
        }else{
          console.log(response.message)
          this.snackbar.open(response.message,"close",{duration:5000})
        }
      }
    )
    
  }

}
