import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'details/:id',
        component:ProductDetailsComponent
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
export class ProductsRoutingModule { }
