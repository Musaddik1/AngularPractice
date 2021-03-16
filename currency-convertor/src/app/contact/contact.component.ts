import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private currencyService:CurrencyService,private snackbar:MatSnackBar,private route:ActivatedRoute,
    private router:Router) { }

    contacts:any;
  ngOnInit(): void {
    this.currencyService.getContact("http://localhost:8080/appservice/contact")
    .subscribe(
      data=>{
        this.contacts=data;
        console.log(this.contacts);
      }
    )
  }
  p:any=1;
  count:any=5;
  details(){

    console.log("details")
  }
  searchData:any;
  search(event:any){

    this.searchData=event.target.value;
    console.log(this.searchData)
  }
  


}
