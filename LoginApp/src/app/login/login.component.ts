import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../login';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginservice:LoginService
    ,private snackbar:MatSnackBar,private route:ActivatedRoute,
    private router:Router,
    ) { }
  login:Login=new Login();
  checked:any
  message:any
  isvalid:any
  ngOnInit(): void {
  }
  hide=true;
  Login(){
    console.log("Hello")
    //this.loginservice.getLogin("http://localhost:8080/test/login?email="+this.login.email+"&password="+this.login.password).subscribe(
      this.loginservice.getlogin("http://localhost:8080/appservice/login",this.login).subscribe(
      (response:any):any=>{
        if(response.statusCode==200){
          console.log("success")
          this.router.navigateByUrl("/dashboard")
          this.snackbar.open("login successfully...","close",{duration:5000})
          this.message="login successfull...";
          this.isvalid=true;
          
        }else{
          console.log("unsuccess")
          this.snackbar.open("login unsuccessfull...","close",{duration:5000})
          this.message="Invalid username or password"
          this.isvalid=false;
        }
      }
    )
      }

}
