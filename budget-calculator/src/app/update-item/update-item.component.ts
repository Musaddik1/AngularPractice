import { Component, OnInit ,Inject} from '@angular/core';
import { MatDialog,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Details } from '../details';

@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,private dialog:MatDialog) { }

  ngOnInit(): void {
    this.amount=this.data.amount;
    this.description=this.data.description;
  }
  details:Details=new Details();
  amount:any;
  description:any
  updateItem(){
    console.log("dialog closed")
this.data.amount=this.amount;
this.data.description=this.description;
    this.dialog.closeAll()
  }

}
