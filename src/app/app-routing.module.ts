import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './admin-auth/guards/auth.guard';

const routes: Routes = [
  {
    path: "",
    loadChildren: () => import('./admin-auth/user-auth.module').then( m => m.AdminAuthModule)
  },
  {
    path: "",
    loadChildren: () => import('./main-page/main-page.module').then( m => m.MainPageModule)
  },
  {
    path: "",
    loadChildren: () => import('./products/products.module').then( m => m.ProductsModule)
  },
  {
    path: "",
    loadChildren: () => import('./cart/cart.module').then( m => m.CartModule)
  },
  {
    path: "",
    loadChildren: () => import('./user-orders/user-orders.module').then( m => m.UserOrdersModule)
  },
  {
    path: "",
    loadChildren: () => import('./user-favs/user-favs.module').then( m => m.UserFavsModule)
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
