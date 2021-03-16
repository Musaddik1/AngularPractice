import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {ScrollingModule} from '@angular/cdk/scrolling';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CurrencyComponent } from './currency/currency.component';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import{FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule } from '@angular/material/input';
import { NgSelectModule } from '@ng-select/ng-select';
import {  ReactiveFormsModule  } from "@angular/forms";
import {HttpClientModule} from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {DomSanitizer} from '@angular/platform-browser';
import { ContactComponent } from './contact/contact.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { NgxPaginationModule } from 'ngx-pagination';






@NgModule({
  declarations: [
    AppComponent,
    CurrencyComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    MatListModule,
    ScrollingModule,
    MatSnackBarModule,
    MatToolbarModule,
    NgSelectModule,
    NgxPaginationModule,
    MatInputModule,
    
      ReactiveFormsModule,
    MatButtonModule,
    HttpClientModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    MatSelectModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
