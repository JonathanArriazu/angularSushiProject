import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  productData: undefined | Product;
  productQuantity: number = 1;
  removeCart = false;
  removeFavs = false;
  showFavstOptions = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private product: ProductService
  ) {}

  ngOnInit(): void {
    let productId = this.activatedRoute.snapshot.paramMap.get('id');

    productId &&
      this.activatedRoute.params
        .pipe(switchMap(({ id }) => this.product.getProduct(id)))
        .subscribe((productData) => (this.productData = productData));

    if (localStorage.getItem('user') || localStorage.getItem('admin')) {
      this.showFavstOptions = true;
    }

    let cartData = localStorage.getItem('localCart');
    if (productId && cartData) {
      let items = JSON.parse(cartData);
      items = items.filter((item: Product) => productId == item.id.toString());
      if (items.length) {
        this.removeCart = true;
      } else {
        this.removeCart = false;
      }
    }
  }

  Quantity(val: string) {
    if (this.productQuantity < 6 && val === 'max') {
      this.productQuantity += 1;
    } else if (this.productQuantity > 1 && val === 'min') {
      this.productQuantity -= 1;
    }
  }

  addToCart() {
    if (this.productData) {
      this.productData.quantity = this.productQuantity;
      if (localStorage.getItem('user')) {
        this.product.addToCartProduct(this.productData);
        this.removeCart = true;
    } else if (localStorage.getItem('admin')) {
        this.product.addToCartProduct(this.productData);
        this.removeCart = true;
    } else {
      this.product.addToCartProduct(this.productData);
        this.removeCart = true;
    }
  }
}

  removeToCart(productId: number) {
    this.product.removeItemFromCart(productId);
    this.removeCart = false;
  }

  addToFavs() {
    if (this.productData) {
      if (localStorage.getItem('user')) {
        this.product.addToFavsProduct(this.productData);
        this.removeFavs = true;
    } else if (localStorage.getItem('admin')) {
        this.product.addToFavsProduct(this.productData);
        this.removeFavs = true;
    } else {
      this.product.addToFavsProduct(this.productData);
        this.removeFavs = true;
    }
  }

  }

  removeToFavs(productId: number) {
    this.product.removeItemFromFavs(productId);
    this.removeFavs = false;
  }
}
