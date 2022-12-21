import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AdminAuthComponent } from './pages/admin-auth/admin-auth.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminAddProductComponent } from './pages/admin-add-product/admin-add-product.component';
import { AdminUpdateProductComponent } from './pages/admin-update-product/admin-update-product.component';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path:'',
    children: [
      {
        path:'admin-auth',
        component:AdminAuthComponent
      },
      {
        path:'admin-home',
        component:AdminHomeComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'admin-add-product',
        component:AdminAddProductComponent,
        canActivate: [AuthGuard]
      },
      {
        path:'admin-update-product/:id',
        component:AdminUpdateProductComponent,
        canActivate: [AuthGuard]
      },
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
export class AdminAuthRoutingModule { }
