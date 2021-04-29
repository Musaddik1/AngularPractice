import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { EditLabelComponent } from '../edit-label/edit-label.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private dialog:MatDialog) { }

  grid:any;
  ngOnInit(): void {
  }
  isGrey:any;

  onGrid(){
    if(!this.grid){
      this.grid=true;
      this.router.navigateByUrl('dashboard/home');
    }else{
      this.grid=false;
      this.router.navigateByUrl("dashboard/grid");
    }
  }

  onNotes()
  {
    this.router.navigate(['dashboard/createnote']);
  }

  openDialog(){
    const ref=this.dialog.open(EditLabelComponent,{
      width:"400px",
      height:"400px"
    })
  }
}
