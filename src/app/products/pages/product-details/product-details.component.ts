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

    if (
      localStorage.getItem('user') ||
      localStorage.getItem('admin') ||
      localStorage.getItem('newuser')
    ) {
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

    if (localStorage.getItem('user')) {
      let favsData = localStorage.getItem('localFavs');
      if (productId && favsData) {
        let items = JSON.parse(favsData);
        let user = localStorage.getItem('user');
        if (user) {
          let userInfo = JSON.parse(user);
          let userId = user && userInfo[0].id;
          items.forEach((element: any) => {
            if (userId === element.userId) {
              let items2 = items.filter(
                (item: any) => productId === item.id.toString()
              );
              if (items2.length) {
                this.removeFavs = true;
              } else {
                this.removeFavs = false;
              }
            }
          });
        }
      }
    } else if (localStorage.getItem('admin')) {
      let favsData = localStorage.getItem('localFavs');
      if (productId && favsData) {
        let items = JSON.parse(favsData);
        let admin = localStorage.getItem('admin');
        if (admin) {
          let adminInfo = JSON.parse(admin);
          let adminId = admin && adminInfo[0].id;
          items.forEach((element: any) => {
            if (adminId === element.userId) {
              let items2 = items.filter(
                (item: any) => productId === item.id.toString()
              );
              if (items2.length) {
                this.removeFavs = true;
              } else {
                this.removeFavs = false;
              }
            }
          });
        }
      }
    } else if (localStorage.getItem('newuser')) {
      let favsData = localStorage.getItem('localFavs');
      if (productId && favsData) {
        let items = JSON.parse(favsData);
        let user = localStorage.getItem('newuser');
        if (user) {
          let userInfo = JSON.parse(user);
          let userId = user && userInfo.id;
          items.forEach((element: any) => {
            if (userId === element.userId) {
              let items2 = items.filter(
                (item: any) => productId === item.id.toString()
              );
              if (items2.length) {
                this.removeFavs = true;
              } else {
                this.removeFavs = false;
              }
            }
          });
        }
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
      } else if (localStorage.getItem('newuser')) {
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

  addToFavs2() {
    if (this.productData) {
      if (localStorage.getItem('user')) {
        this.product.addToFavsProduct(this.productData);
        this.removeFavs = true;
      } else if (localStorage.getItem('admin')) {
        this.product.addToFavsProduct(this.productData);
        this.removeFavs = true;
      } else if (localStorage.getItem('newuser')) {
        this.product.addToFavsProduct(this.productData);
        this.removeFavs = true;
      } else {
        this.product.addToFavsProduct(this.productData);
        this.removeFavs = true;
      }
    }
  }

  addToFavs() {
    if (this.productData) {
      if (
        localStorage.getItem('user') ||
        localStorage.getItem('admin') ||
        localStorage.getItem('newuser')
      ) {
        let favsData = this.productData;
        let user = localStorage.getItem('user');
        let admin = localStorage.getItem('admin');
        let newUser = localStorage.getItem('newuser');
        if (user) {
          let userInfo = JSON.parse(user);
          let userId = user && userInfo[0].id;
          let favsData = {
            ...this.productData,
            userId,
          };
          this.productData = favsData;
          this.product.addToFavsProduct(this.productData);
        } else if (admin) {
          let adminInfo = JSON.parse(admin);
          let userId = admin && adminInfo[0].id;
          let favsData = {
            ...this.productData,
            userId,
          };
          this.productData = favsData;
          this.product.addToFavsProduct(this.productData);
        } else if (newUser) {
          let userInfo = JSON.parse(newUser);
          let userId = newUser && userInfo.id;
          let favsData = {
            ...this.productData,
            userId,
          };
          this.productData = favsData;
          this.product.addToFavsProduct(this.productData);
        }
        this.removeFavs = true;
      }
    }
  }

  /* loadDetails2() {
  if (localStorage.getItem('user') || localStorage.getItem('admin') || localStorage.getItem('newuser')) {
    let favsData = localStorage.getItem('localFavs');
    let user = localStorage.getItem('user');
    let admin = localStorage.getItem('admin');
    let newUser = localStorage.getItem('newuser')
    if (favsData && user) {
      let userInfo = JSON.parse(user);
      let userId = user && userInfo[0].id;
      let favsDataList = JSON.parse(favsData);
      favsDataList.forEach((product: Product) => {
      let favsData = {
        ...product,
        userId
      };
      console.log(favsData)
    })
}}} */

  removeToFavs(productId: number) {
    this.product.removeItemFromFavs(productId);
    this.removeFavs = false;
  }
}
