import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Details } from '../details';


@Component({
  selector: 'app-update-item',
  templateUrl: './update-item.component.html',
  styleUrls: ['./update-item.component.scss']
})
export class UpdateItemComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any ,private dialog:MatDialog){}

  ngOnInit(): void {
  
    this.detail.item=this.data.item;
    this.detail.description=this.data.description
    console.log("item ",this.data.item);
  }
  detail:Details=new Details()
  updateItem(){

    console.log("data",this.data)
    this.dialog.closeAll()
  
  }
}
