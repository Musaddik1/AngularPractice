import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Candidates } from '../candidates';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private http:HttpService,private snackbar:MatSnackBar,
    private router:Router,private route:Router) { }

  selectCandidate: string | undefined;
  candidates:any;

  ngOnInit(): void {
    this.getCandidates()
  }

  getCandidates(){
    this.http.getvoterCandidates("/voter/candidates")
    .subscribe(data=>{
      this.candidates=data
      console.log("data",data);
    })
  }
  vote(candidate:any){
    this.http.giveVote("http://localhost:8080/voter?name="+candidate.firstName)
    .subscribe((response:any):any=>{
      if(response.status==200){
        console.log("vote given successfully")
        this.snackbar.open("Thanks for voting","close",{duration:2500})
        localStorage.removeItem('token');
        this.router.navigateByUrl("/login-voter")
        
      }else{
        this.snackbar.open("something went wrong","close",{duration:2500})
      }
    })
    console.log("candidate",candidate);
  }

}
