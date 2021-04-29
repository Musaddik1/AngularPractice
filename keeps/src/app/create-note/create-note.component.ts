import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  constructor(private router:Router) { }

  expand:any;
  ngOnInit(): void {
  }

  Onexpand(){
    if(this.expand){
      this.expand=false;
    }else{
      this.expand=true;
    }


  }
  showAddNote:any;
  showBar()
  {
    if(!this.showAddNote){
      this.showAddNote=true
    }else{
      this.showAddNote=false
    }
  }

  close(){
    
  }

  
  
}
