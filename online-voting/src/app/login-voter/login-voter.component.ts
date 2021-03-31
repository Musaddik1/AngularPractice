import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from '../http.service';
import { Login } from '../login';

@Component({
  selector: 'app-login-voter',
  templateUrl: './login-voter.component.html',
  styleUrls: ['./login-voter.component.scss']
})
export class LoginVoterComponent implements OnInit {

  constructor(private http:HttpService,
    private route:ActivatedRoute,
    private router:Router,
    private snackbar:MatSnackBar) { }

  token=this.route.snapshot.paramMap.get('token');
  login:Login=new Login();
  ngOnInit(): void {
  }

  onlogin(){

    http://localhost:8080/admin/loginadmin?email=musaddik%40gmail.com&password=Musaddik
    console.log("token",this.token);
    this.http.getLogin("http://localhost:8080/voter/login?email="+this.login.email+"&password="+this.login.password)
    .subscribe((response:any):any=>{
      if(response.status==200){
        this.snackbar.open("login successfull","close",{duration:25000})
        this.router.navigateByUrl("/dashboard")
        localStorage.setItem('token',response.data);
        console.log("token1",response.data);
        console.log("login successfull")

      }else{
        console.log("login unsuccessfull")
      }
    })


  }
}
