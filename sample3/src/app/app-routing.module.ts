import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ListUserComponent } from './list-user/list-user.component';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full' },

  {path:"dashboard",component:DashboardComponent,
  children:[{path:"list",component:ListUserComponent},
            {path:'add',component:AddUserComponent}    
]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
