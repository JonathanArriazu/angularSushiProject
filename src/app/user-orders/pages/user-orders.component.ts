import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  UserCart,
  AdminCart,
  UserOrders,
  AdminOrders,
} from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-orders',
  templateUrl: './user-orders.component.html',
  styleUrls: ['./user-orders.component.css'],
})
export class UserOrdersComponent implements OnInit {
  cartData: any[] = [];
  cartData2: any[] = [];
  userLogged = false;
  titleType: string = 'user';
  adminOrdersList: string = 'default'

  constructor(private product: ProductService, private router: Router) {}

  EmptyCartMessage = false;

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.userLogged = true;
      this.titleType = 'user';
      this.product.getUserOrders().subscribe((result) => {
        this.cartData = result;
        let user = localStorage.getItem('user');
        if (user) {
          let userInfo = JSON.parse(user);
          let userId = user && userInfo[0].id;
          this.cartData.reverse().forEach((result) => {
            if (userId === result.userId) {
              this.cartData2.push(result);              
            }
           if (this.cartData2.length === 0){
            this.EmptyCartMessage = true;
           } else {
            this.EmptyCartMessage = false;
           }
          });
        }
      });
    } else if (localStorage.getItem('admin')) {
      this.userLogged = true;
      this.titleType = 'admin';
      this.product.getUserOrders().subscribe((result) => {
        this.cartData = result.reverse();
        this.adminOrdersList = 'adminList'
        console.log(this.cartData)        
      });
    } else if (localStorage.getItem('newuser')) {
      this.userLogged = true;
      this.titleType = 'user'
      this.product.getUserOrders().subscribe((result) => {
        this.cartData = result;
        let newUser = localStorage.getItem('newuser');
        if (newUser) {
          let userInfo = JSON.parse(newUser);
          let userId = newUser && userInfo.id;
          this.cartData.reverse().forEach((result) => {
            if (userId === result.userId) {              
              this.cartData2.push(result);              
            }
            if (this.cartData2.length === 0){
              this.EmptyCartMessage = true;
             } else {
              this.EmptyCartMessage = false;
             }
          });
        }
      });
    }
    /* console.log(this.cartData2) */
    /* if (this.cartData2) {
      this.EmptyCartMessage = false
    }  */
  }
}
