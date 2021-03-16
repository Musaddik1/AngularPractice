import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';


import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  disableSelect = new FormControl();

  constructor(private currencyService:CurrencyService,private sanitize:DomSanitizer) { }
  control1:any;
  countries:any
  ngOnInit(): void {
    console.log("Hello")
    this.currencyService.getCountry("http://localhost:8080/appservice/country")

    .subscribe(
      data=>{
        this.countries=data
        
      }
    )
  }
  selectFormControl:any;

  
  id:any;
 
  countryName1:any;
  countryName2:any;
  selectedDay: string = '';
  code1:any;
  code2:any;

  //event handler for the select element's change event
  from:any;
  to:any;
  amount:any;
  country1:any;
  country2:any;
  url1:any;
  url2:any;
  data:any;
  selectChangeHandler (event: any) {
    //update the ui
    this.countryName1= event.target.value;
    this.countryName1=this.countryName1.toLowerCase()
    console.log(this.countryName1);
    this.change=false;
    this.currencyService.getCountry("http://localhost:8080/appservice/name?name="+this.countryName1)
    .subscribe(
      data=>{
        this.country1=data;
        console.log(data.code);
        console.log(data.countrycode)
        console.log(data.countryname);
        console.log(data.url)
        this.url1=data.url;
      }

    )

  }
  onPressEnter(event:any){
    this.result=event.target.value
  }
  result:any;
  

  selectChangeHandler1 (event: any) {
    //update the ui
    this.countryName2= event.target.value;
    console.log(this.countryName2)
    this.countryName2=this.countryName2.toLowerCase();
    console.log(this.countryName2)
    this.change=false;
    this.currencyService.getCountry("http://localhost:8080/appservice/name?name="+this.countryName2)
    .subscribe(
      data=>{
        this.country2=data;
        console.log(data.code);
        console.log(data.countrycode)
        console.log(data.url)
        this.url2=data.url;
        console.log(data.countryname);

      }
    )

  }

  onConvert(){
    console.log("onconvert")
    this.from=this.country1.countrycode;
    this.to=this.country2.countrycode;
    debugger
    console.log("result",this.result)
    this.amount=this.result;
    if(this.amount!=null ){
    this.currencyService.getCurrency("http://localhost:8080/appservice/currency?from="+this.from+"&to="+this.to+"&amount="+this.amount)
    .subscribe(
      data=>{
        console.log(data);
        this.data=data;
        this.code1=this.country1.countrycode
        console.log(this.code1,"sdjfklasdlk")
      }
    )
    
    if(this.matShow==true){
      this.matShow=false;
    }else{
      this.matShow=true;
    }
    }else{
      this.change=true
      this.message="amount must not be null"
    }
  }
  message:any;
  temp:any;
  matShow:boolean=false;
  change=false;
  changeValue=false;
  OnSwap(){
    this.changeValue=true
    
  }
  
  Change(){
    this.change=false;
  }
}