import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon'
import { MatMenuModule} from '@angular/material/menu';
import { OrderListComponent } from './order-list/order-list.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import {MatListModule} from '@angular/material/list';
import { SalesComponent } from './sales/sales.component';
import { OrdersComponent } from './orders/orders.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { ToDoComponent } from './to-do/to-do.component';
import { UpdateItemComponent } from './update-item/update-item.component';
import { MatDialogModule } from '@angular/material/dialog';






@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    OrderListComponent,
    CalculatorComponent,
    SalesComponent,
    OrdersComponent,
    CustomersComponent,
    ProductsComponent,
    ToDoComponent,
    UpdateItemComponent
  ],
  imports: [
    BrowserModule,
    MatMenuModule,
    MatListModule,
    ChartsModule,
    MatInputModule,
    MatFormFieldModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDialogModule,
    MatGridListModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule

  ],
  providers: [],
  entryComponents:[UpdateItemComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
