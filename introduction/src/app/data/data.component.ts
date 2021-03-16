import { Component, OnInit } from '@angular/core';
import {RecordsService} from "../records.service";
@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  records:any
  constructor(private service:RecordsService) { }

  ngOnInit(): void {
    this.service.getData().subscribe(data=>{
      console.log(typeof(data))
      console.log("we got",data)
       this.records=data;
            
            
    })
  }

}
