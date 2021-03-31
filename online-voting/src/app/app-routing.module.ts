import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginVoterComponent } from './login-voter/login-voter.component';
import { LoginComponent } from './login/login.component';
import { RegisterVoterComponent } from './register-voter/register-voter.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:"register",component:RegisterComponent},
  {path:"login-voter",component:LoginVoterComponent},
  {path:"register-voter",component:RegisterVoterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
