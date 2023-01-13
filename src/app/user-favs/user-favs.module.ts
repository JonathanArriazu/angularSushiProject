import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserFavsComponent } from './pages/user-favs.component'
import { UserFavsRoutingModule } from './user-favs-routing.module'



@NgModule({
  declarations: [
    UserFavsComponent
  ],
  imports: [
    CommonModule,
    UserFavsRoutingModule
  ]
})
export class UserFavsModule { }
