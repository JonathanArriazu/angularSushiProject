import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    ProductDetailsComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
