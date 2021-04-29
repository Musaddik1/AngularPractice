import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ListComponent } from './list/list.component';
import { ArrowFunctionComponent } from './arrow-function/arrow-function.component';
import { ClassesComponent } from './classes/classes.component';
import { DestructuringComponent } from './destructuring/destructuring.component';
import { MapsComponent } from './maps/maps.component';
import { ParametersComponent } from './parameters/parameters.component';
import { ScopandletComponent } from './scopandlet/scopandlet.component';
import { SetsComponent } from './sets/sets.component';
import { TemplateStringsComponent } from './template-strings/template-strings.component';
import { WeakMapAndWeakSetComponent } from './weak-map-and-weak-set/weak-map-and-weak-set.component';
import { Practice1Component } from './practice1/practice1.component';





@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListComponent,
    ArrowFunctionComponent,
    ClassesComponent,
    DestructuringComponent,
    MapsComponent,
    ParametersComponent,
    ScopandletComponent,
    SetsComponent,
    TemplateStringsComponent,
    WeakMapAndWeakSetComponent,
    Practice1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
