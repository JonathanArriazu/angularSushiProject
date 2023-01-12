import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserOrdersComponent } from './pages/user-orders.component';
import { UserOrdersRoutingModule } from './user-orders-routing.module';



@NgModule({
  declarations: [
    UserOrdersComponent
  ],
  imports: [
    CommonModule,
    UserOrdersRoutingModule
  ]
})
export class UserOrdersModule { }
