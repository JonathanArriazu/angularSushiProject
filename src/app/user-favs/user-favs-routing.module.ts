import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {UserFavsComponent} from './pages/user-favs.component'


const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'user-favs-list',
        component:UserFavsComponent
      }
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class UserFavsRoutingModule { }
