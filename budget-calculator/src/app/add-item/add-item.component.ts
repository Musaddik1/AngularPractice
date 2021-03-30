import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Details } from '../details';
import { UpdateItemComponent } from '../update-item/update-item.component';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.scss']
})
export class AddItemComponent implements OnInit {

  constructor(private dialog:MatDialog) { }
  amount:any
  description:any
  ngOnInit(): void {

  }
  @Input() details:any;
;
  
 
  openDialog(details:any){
    console.log("dfljsflkjdsljsalkjsal;kjsdlk",this.details)
    const ref=this.dialog.open(UpdateItemComponent,{
      width:'400px',
      height:"80px",
      data:{
        amount:details.amount,
        description:details.description
      }
    }
    )
  }
  onCloseClick(){
    
  }
  edit(){
    this.amount=this.details.amount;
    this.description=this.details.description
  }

  deleteItem(detail:any){
    console.log("item deleted")
    console.log(this.details)
    detail.check=false;
  }
}
