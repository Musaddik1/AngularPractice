import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './customer/customer.component';
import { LoginComponent } from './login/login.component';
import { CustomerAddressComponent } from './customer-address/customer-address.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  {path:"dashboard",component:DashboardComponent
  ,children:[
    {path:"addEmployee",component:EmployeeComponent},
    {path:'login',component:LoginComponent},
    {path:"address",component:CustomerAddressComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
