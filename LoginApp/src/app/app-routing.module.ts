import { HtmlParser } from '@angular/compiler';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ContactComponent } from './contact/contact.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SubscribeComponent } from './subscribe/subscribe.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent

  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path:"admin",
    component:AdminComponent
  },
  {
    path:"register",
    component:RegisterComponent

  },{
    path:"dashboard",
    component:DashboardComponent
  },{
    path:"subscribe",
    component:SubscribeComponent
  },{
    path:"contact",
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
