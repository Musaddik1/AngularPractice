import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';

import {MatSelectModule} from '@angular/material/select'
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { HttpClientModule } from '@angular/common/http';
import { CreateNoteComponent } from './create-note/create-note.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { NotesComponent } from './notes/notes.component';
import { ReminderComponent } from './reminder/reminder.component';

import { ArchiveComponent } from './archive/archive.component';
import { BinComponent } from './bin/bin.component';
import { IconComponent } from './icon/icon.component';
import { UpdatenoteComponent } from './updatenote/updatenote.component';

import {MatGridListModule} from '@angular/material/grid-list';
import { GridListComponent } from './grid-list/grid-list.component';
import { EditLabelComponent } from './edit-label/edit-label.component';








@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    CreateNoteComponent,
    NotesComponent,
    ReminderComponent,
    ArchiveComponent,
    BinComponent,
    IconComponent,
    UpdatenoteComponent,
    GridListComponent,
    EditLabelComponent,
    
  ],
  imports: [
    HttpClientModule,
    MatExpansionModule,
    BrowserModule,
    MatListModule,
    MatDialogModule,
    MatMenuModule,
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatSnackBarModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatIconModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
