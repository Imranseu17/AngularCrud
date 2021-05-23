import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddRestoComponent} from './add-resto/add-resto.component'
import {ListRestoComponent} from './list-resto/list-resto.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {UpdateRestoComponent} from './update-resto/update-resto.component'

const routes: Routes = [
  {
    path: 'add',
    component:AddRestoComponent
  },
 
  {
    path: 'update/:id',
    component:UpdateRestoComponent
  },
  {
    path: 'login',
    component:LoginComponent
  },
  {
    path: 'register',
    component:RegisterComponent
  },
  {
    path: '',
    component:ListRestoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
