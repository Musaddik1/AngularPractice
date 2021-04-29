import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-address',
  templateUrl: './update-address.component.html',
  styleUrls: ['./update-address.component.scss']
})
export class UpdateAddressComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data:any,
  private dialog:MatDialog) { }
  email:any;
  address:any;
  mobile:any;
  landmark:any;
  pincode:any;
  ngOnInit(): void {

    console.log(this.data);
    this.email=this.data.email;
    this.address=this.data.address;
    this.mobile=this.data.mobile;
    this.landmark=this.data.landmark;
    this.pincode=this.data.pincode;
    console.log(this.data.email);
  }
  update(){
    console.log("updated");
  }

}
