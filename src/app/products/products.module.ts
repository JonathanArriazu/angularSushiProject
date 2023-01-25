import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsRoutingModule } from './products-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './pages/product-list/product-list.component';
import { SidebarComponent } from '../site-layout/sidebar/sidebar.component';
import { SiteLayoutModule } from '../site-layout/site-layout.module';
import { NgbCollapseModule, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [
    ProductDetailsComponent,
    ProductListComponent
  ],
  imports: [
    NgbCollapseModule,
    NgbDropdownModule,
    CommonModule,    
    FontAwesomeModule,
    ProductsRoutingModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
