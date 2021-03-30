import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CurrencyComponent } from './currency/currency.component';
import { PracticeComponent } from './practice/practice.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path:"currency",component:CurrencyComponent},
  {path:"contact",component:ContactComponent},
  {path:"table",component:TableComponent},
  {path:"angular",component:PracticeComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
