import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
check:boolean=false;
  more(){
    if(this.check){
      this.check=false
    }else{
      this.check=true;
    }
  }
  property:any;
  
  isInbox:any;
  isStarred:any;
}
