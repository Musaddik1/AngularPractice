import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdateAddressComponent } from '../update-address/update-address.component';

@Component({
  selector: 'app-customer-address',
  templateUrl: './customer-address.component.html',
  styleUrls: ['./customer-address.component.scss']
})
export class CustomerAddressComponent implements OnInit {

  constructor(private dialog:MatDialog) { }

  address={
    name:"Musaddik Ahmed Shaikh Ishaque",
    email:"musaddikshaikh5@gmail.com",
    mobile:"9823139449",
    address:"Laxmi nagar Yerwada Pune",
    landmark:"near shiv sagar marriage hall",
    pincode:425105

  }

  ngOnInit(): void {
  }
  openDialog(){
    const dialogRef=this.dialog.open(UpdateAddressComponent,{
      
        data:this.address,
        width: '30%',
      height : 'auto',

      
    });
    

  }
}
