import { Component, OnInit } from '@angular/core';
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

  constructor(private product: ProductService) {}

  ngOnInit(): void {   

    this.loadDetails();
  }

  loadDetails() {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items = JSON.parse(cartData);
      this.cartData = items;
      /* let totalPrice = this.cartData.reduce((a, b) => a + (parseInt(b["price"]) || 0), 0);
      this.totalPrice= totalPrice */
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
}
