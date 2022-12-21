import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { MainPageRoutingModule } from './main-page-routing.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    MainPageRoutingModule,
    NgbModule,
    HttpClientModule
  ]
})
export class MainPageModule { }
