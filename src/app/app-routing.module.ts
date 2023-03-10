import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./conteiners/login/login.component";
import {RegisterComponent} from "./conteiners/register/register.component";
import {BoardComponent} from "./conteiners/board/board.component";
import {AuthGuard} from "./shered/classes/auth.guard";
import {ContentComponent} from "./conteiners/content/content.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'board', component: BoardComponent, canActivate: [AuthGuard], children:[
      {
        path: ':categoryUrl',
        component: ContentComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
