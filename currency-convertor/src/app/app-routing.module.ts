import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { CurrencyComponent } from './currency/currency.component';

const routes: Routes = [
  {path:"currency",component:CurrencyComponent},
  {path:"contact",component:ContactComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
