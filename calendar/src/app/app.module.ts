import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

import {MatInputModule} from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CustomersComponent } from './customers/customers.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { AgGridModule } from 'ag-grid-angular';
import {MatListModule} from '@angular/material/list';
import { LoginComponent } from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OrderDetailsComponent } from './order-details/order-details.component';






@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    LoginComponent,
    NewCustomerComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    MatIconModule,
    MatInputModule,
    AppRoutingModule,
    MatDialogModule,
    MatListModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    AgGridModule,
    MatGridListModule,
    MatFormFieldModule,
    MatToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
