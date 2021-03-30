import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

export interface Country{
  id:number;
	
	  countrycode:string;
	
	  countryname:string;
	
	  code:string;

	  url:string
}




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})


export class TableComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'countrycode', 'countryname', 'code','url'];
  dataSource :any;
  sortedData:Country[] | undefined;
  constructor(private currency:CurrencyService) { }

  ngOnInit(): void {

    this.currency.getCountry("http://localhost:8080/appservice/country")
    .subscribe(
      data=>{
        this.dataSource=data
      }
    )
    
  }
  sortData(event:any){

  }

}
