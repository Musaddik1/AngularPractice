import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  constructor() { }
  email:any;
  password:any;
  hide:any;
  ngOnInit(): void {
  }
  home(){

  }
  logout(){
    console.log("Hello")    
  }

}
