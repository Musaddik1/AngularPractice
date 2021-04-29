import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  notes= [{
    noteId:1,
    title: "one",
    description: "one"
  },
    { noteId:2, title: "twosfdsafsaas", description: "twoasdsdfsafssdfsd" },
    { noteId:2, title: "twosfdsafsaas", description: "twoasdsdfsafssdfsd" },
    { noteId:2, title: "twosfdsafsaas", description: "twoasdsdfsafssdfsd" },
    { noteId:2, title: "twosfdsafsaas", description: "twoasdsdfsafssdfsd" },
    { noteId:2, title: "twosfdsafsaas", description: "twoasdsdfsafssdfsd" },
    { noteId:2, title: "twosfdsafsaas", description: "twoasdsdfsafssdfsd" },
    { noteId:2, title: "twosfdsafsaas", description: `twoasdsdfsafssdfsd
    sdsfsdfs
    sdfsf
    sdf
    dfasfgteg
    rtty
    sdfetds` },
 
 
 
 
 

  ];
  ngOnInit(): void {
  }


  openDialog(item:any){
    const ref=this.dialog.open(UpdatenoteComponent,{
      width:"40%",
      
      data:{
        noteId:item.noteId,
        title:item.title,
        description:item.description
      }
    }
    )
    console.log("dialog open")

  }

  

}
