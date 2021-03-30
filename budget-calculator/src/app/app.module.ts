import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddItemComponent } from './add-item/add-item.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatDialogModule  } from '@angular/material/dialog';
import { UpdateItemComponent } from './update-item/update-item.component';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';




@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    AddItemComponent,
    UpdateItemComponent
  ],
  imports: [
    BrowserModule,
    MatDialogModule,
    MatIconModule,
    FormsModule,
    MatCardModule,
    AppRoutingModule,
    MatButtonModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatFormFieldModule
  ],
  providers: [],
  entryComponents:[
    UpdateItemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
