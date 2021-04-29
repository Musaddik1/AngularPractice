import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { LoginComponent } from './login/login.component';
import { NewCustomerComponent } from './new-customer/new-customer.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  
  {path:"customers",component:CustomersComponent},
  {path:"login",component:LoginComponent},
  {path:"new-customer",component:NewCustomerComponent},
  {path:"order-detail",component:OrderDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
