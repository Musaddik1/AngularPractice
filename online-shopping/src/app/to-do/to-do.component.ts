import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Details } from '../details';
import { UpdateItemComponent } from '../update-item/update-item.component';


@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }
  item:any;
  description:any;
  result:any;
  details:Details[]=[]
  detail:Details=new Details()
  @ViewChild("myNameElem") myNameElem: ElementRef | undefined;
  name:any;

 addItem()
 {
  console.log(this.item);
  console.log(this.description);
  this.detail.item=this.item;
  this.detail.description=this.description;
  this.details.push(this.detail);
  this.detail=new Details();
 }
 data:any;
 delete(event:any){
   console.log(this.myNameElem?.nativeElement.value)
   this.data=this.myNameElem?.nativeElement.value;
   for(let i=0;i<this.details.length;i++){
     if(this.details[i]===this.data){
       delete this.details[i];
     }
   }
 } 
 openDialog(details:any){
   debugger
  console.log("dfljsflkjdsljsalkjsal;kjsdlk",this.details)
  const ref=this.dialog.open(UpdateItemComponent,{
    width:'400px',
    height:"100px",
    data:{
      item:details.item,
      description:details.description
    }
  }
  )
}
}
