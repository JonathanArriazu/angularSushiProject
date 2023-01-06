import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './pages/cart/cart.component';


const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'cart-list',
        component:CartComponent
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
export class CartRoutingModule { }
