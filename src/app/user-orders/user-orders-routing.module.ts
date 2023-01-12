import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UserOrdersComponent } from './pages/user-orders.component'


const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'user-order-list',
        component:UserOrdersComponent
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
export class UserOrdersRoutingModule { }
