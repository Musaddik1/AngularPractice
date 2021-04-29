import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private dialog:MatDialog) { }

  noteId:any;
  title:any;
  description:any;

  ngOnInit(): void {
    console.log(this.data);
    this.noteId=this.data.noteId;
    this.title=this.data.title;
    this.description=this.data.description;
  }

}
