import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartData = [];
  totalPrice = {
    price: 0,
  };

  constructor(private product: ProductService,
              private router: Router) {}

  purchaseErrorMessage : undefined | string;
  successfulPurchaseMessage: undefined | string;

  ngOnInit(): void {   

    this.loadDetails();
  }

  loadDetails() {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items = JSON.parse(cartData);
      this.cartData = items;
      let price = 0;
      this.cartData.forEach((item) => {
        if (item['quantity']) {
          price = price + +item['price'] * +item['quantity'];
        }
      });
      this.totalPrice.price = price;
    }
  }

  removeToCart(number: number) {
    this.product.removeItemFromCart(number);
    this.loadDetails();
  }

  removeAll() {
    this.product.removeAllItemsFromCart();
    this.loadDetails();
  }


  purchase(){
    if (localStorage.getItem('user') || localStorage.getItem('admin')) {
      console.log('Compra realizada por el monto de =>', this.totalPrice.price);
      this.successfulPurchaseMessage = 'Compra realizada con exito'
      setTimeout(() => (this.successfulPurchaseMessage = undefined, this.removeAll()), 2500);
      
         
    } else {
      this.purchaseErrorMessage = 'Debe estar logueado primero';
      setTimeout(() => (this.purchaseErrorMessage = undefined, this.router.navigate(['/user-auth'])), 2500);
    }
  }

}
