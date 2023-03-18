import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserCart, AdminCart, Product, UserOrders, AdminOrders } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  date = new Date();
  cartData = [];
  purchasedItems: undefined | UserOrders[];
  totalPrice = {
    price: 0,
  };
  emptyCartData: undefined | string;

  constructor(private product: ProductService, private router: Router) {}

  purchaseErrorMessage: undefined | string;
  successfulPurchaseMessage: undefined | string;
  EmptyCartMessage = false

  ngOnInit(): void {
    this.loadDetails();
  }

  loadDetails() {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items = JSON.parse(cartData);
        this.cartData = items;
        if (this.cartData. length === 0) {
          this.EmptyCartMessage = true
        }
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

  purchase() {
    if (localStorage.getItem('user') || localStorage.getItem('admin') || localStorage.getItem('newuser')) {
      let data = localStorage.getItem('localCart');
      let user = localStorage.getItem('user');
      let admin = localStorage.getItem('admin');
      let newUser = localStorage.getItem('newuser')
      if (data && user) {
        let userInfo = JSON.parse(user);
        let userId = user && userInfo[0].id;
        let userName = user && userInfo[0].name;
        console.log(userName)
        let cartDataList = JSON.parse(data);
        let actualDate = this.date.getDate() + "-"+ this.date.getMonth()+1 + "-" +this.date.getFullYear();    
        cartDataList.forEach((product: Product) => {
          let cartData: UserCart = {
            ...product,
            productId: product.id,
            userId,
            actualDate,
            userName
          };
          delete cartData.id;
          this.product.addUserOrders(cartData).subscribe((result) => {
            if (result) {
              this.successfulPurchaseMessage = 'Compra realizada con exito';
            }
            setTimeout(
              () => (
                (this.successfulPurchaseMessage = undefined),
                this.removeAll(),
                this.router.navigate(['/user-order-list'])
              ),
              2500
            );
          });
        });
      } else if (data && admin) {
        let adminInfo = JSON.parse(admin);
        let adminId = admin && adminInfo[0].id;
        let cartDataList = JSON.parse(data);
        let actualDate = this.date.getDate() + "-"+ this.date.getMonth()+1 + "-" +this.date.getFullYear();
        cartDataList.forEach((product: Product) => {
          let cartData: AdminCart = {
            ...product,
            productId: product.id,
            adminId,
            actualDate
          };
          delete cartData.id;
          this.product.addAdminOrders(cartData).subscribe((result) => {
            if (result) {
              this.successfulPurchaseMessage = 'Compra realizada con exito';
            }
            setTimeout(
              () => (
                (this.successfulPurchaseMessage = undefined),
                this.removeAll(),
                this.router.navigate(['/user-order-list'])
              ),
              2500
            );
          });
        });
      } else if (data && newUser) {        
        let userInfo = JSON.parse(newUser);
        console.log(userInfo)
        let userId = newUser && userInfo.id;
        console.log(userId)
        let userName = newUser && userInfo.name;
        console.log(userName)
        let cartDataList = JSON.parse(data);
        let actualDate = this.date.getDate() + "-"+ this.date.getMonth()+1 + "-" +this.date.getFullYear();    
        cartDataList.forEach((product: Product) => {
          let cartData: UserCart = {
            ...product,
            productId: product.id,
            userId,
            actualDate,
            userName
          };
          delete cartData.id;
          this.product.addUserOrders(cartData).subscribe((result) => {
            if (result) {
              this.successfulPurchaseMessage = 'Compra realizada con exito';
            }
            setTimeout(
              () => (
                (this.successfulPurchaseMessage = undefined),
                this.removeAll(),
                this.router.navigate(['/user-order-list'])
              ),
              2500
            );
          });
        });
      }
    } else {
      this.purchaseErrorMessage = 'Debe estar logueado primero';
      setTimeout(
        () => (
          (this.purchaseErrorMessage = undefined),
          this.router.navigate(['/user-auth'])
        ),
        2500
      );
    }

    /* if (localStorage.getItem('user') || localStorage.getItem('admin')) {
      let cartData = localStorage.getItem('localCart');
      console.log('cartData => ', cartData);
      let user = localStorage.getItem('user');
      let admin = localStorage.getItem('admin');
      if (cartData && user) {
        let purchasedItems: UserOrder[] = JSON.parse(cartData);
        console.log(purchasedItems);
        let userInfo = JSON.parse(user);
        let userId = userInfo[0].id;
        let cartDataId = {
          ...purchasedItems,
          userId,
        };
        console.log('cartDataId => ', cartDataId);
        this.product.addUserOrder(cartDataId).subscribe((result) => {
          if (result) {
            this.successfulPurchaseMessage = 'Compra realizada con exito';
          }
          setTimeout(
            () => (
              (this.successfulPurchaseMessage = undefined),
              this.removeAll(),
              this.router.navigate(['/main'])
            ),
            2500
          );
        });
      } else if (admin) {
        let adminId = JSON.parse(admin);
        console.log('adminId => ', adminId[0].id);
      }
    } else {
      this.purchaseErrorMessage = 'Debe estar logueado primero';
      setTimeout(
        () => (
          (this.purchaseErrorMessage = undefined),
          this.router.navigate(['/user-auth'])
        ),
        2500
      );
    }
  } */

  /* localCartToRemoteCart(){
    let data = localStorage.getItem('localCart');
    let user = localStorage.getItem('user');
    if(user) {
      let userInfo = JSON.parse(user);
      let userId = user && userInfo[0].id;
      if (data) {
        let cartDataList = JSON.parse(data);
        cartDataList.forEach((product: Product, index: any) => {
          let cartData: Cart = {
            ...product,
            productId: product.id,
            userId
          }
          delete cartData.id;
          setTimeout(() => {
            this.product.addToCart(cartData)
            .subscribe((result) => {
              if (result) {
                console.warn('Item stored in DB');
              }
            })
            if (cartDataList.length === index+1){
              localStorage.removeItem('localCart');
            }
          }, 500);
        })
      }
    }
  } */
}}
