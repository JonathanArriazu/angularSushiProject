import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminAddProductComponent } from './pages/admin-add-product/admin-add-product.component';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { AdminAuthComponent } from './pages/admin-auth/admin-auth.component';
import { AdminUpdateProductComponent } from './pages/admin-update-product/admin-update-product.component';
import { AdminAuthRoutingModule } from './admin-auth-routing.module';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AdminAddProductComponent,
    AdminHomeComponent,
    AdminAuthComponent,
    AdminUpdateProductComponent
  ],
  imports: [
    CommonModule,
    AdminAuthRoutingModule,
    FormsModule,
    FontAwesomeModule,
    HttpClientModule
  ]
})
export class AdminAuthModule { }
