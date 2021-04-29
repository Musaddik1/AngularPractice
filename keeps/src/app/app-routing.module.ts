import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ArchiveComponent } from './archive/archive.component';
import { BinComponent } from './bin/bin.component';
import { CreateNoteComponent } from './create-note/create-note.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { GridListComponent } from './grid-list/grid-list.component';
import { IconComponent } from './icon/icon.component';

import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';
import { RegisterComponent } from './register/register.component';
import { ReminderComponent } from './reminder/reminder.component';

const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"dashboard",component:DashboardComponent,
  children:[{path:"home",component:NotesComponent},
  {path:"reminder",component:ReminderComponent},
  {path:"bin",component:BinComponent},
  {path:"archive",component:ArchiveComponent},
  {path:"grid",component:GridListComponent}
]},
{path:"icon",component:IconComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
