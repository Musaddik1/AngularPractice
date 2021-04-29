import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrowFunctionComponent } from './arrow-function/arrow-function.component';
import { ClassesComponent } from './classes/classes.component';
import { DestructuringComponent } from './destructuring/destructuring.component';
import { ListComponent } from './list/list.component';
import { MapsComponent } from './maps/maps.component';
import { ParametersComponent } from './parameters/parameters.component';
import { Practice1Component } from './practice1/practice1.component';
import { ScopandletComponent } from './scopandlet/scopandlet.component';
import { SetsComponent } from './sets/sets.component';
import { TemplateStringsComponent } from './template-strings/template-strings.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { WeakMapAndWeakSetComponent } from './weak-map-and-weak-set/weak-map-and-weak-set.component';

const routes: Routes = [
  {
    path:"toolbar",
    component:ToolbarComponent
  },{path:"list",component:ListComponent},
  {path:"arrow_function",component:ArrowFunctionComponent},
  {path:"classes",component:ClassesComponent},
  {path:"destructuring",component:DestructuringComponent},
  {path:"maps",component:MapsComponent},
  {path:"parameters",component:ParametersComponent},
  {path:"scopeandlet",component:ScopandletComponent},
  {path:"sets",component:SetsComponent},
  {path:"template_strings",component:TemplateStringsComponent},
  {path:"weakmap_weakset",component:WeakMapAndWeakSetComponent},
  {path:"practice1",component:Practice1Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
