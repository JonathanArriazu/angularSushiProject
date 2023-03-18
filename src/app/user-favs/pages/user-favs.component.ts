import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-favs',
  templateUrl: './user-favs.component.html',
  styleUrls: ['./user-favs.component.css'],
})
export class UserFavsComponent implements OnInit {
  date = new Date();
  favsData: any[] = [];
  favsData2: any[] = [];
  userLogged = false;
  titleType: string = 'user';
  adminOrdersList: string = 'default'

  constructor(private product: ProductService, private router: Router) {}

  purchaseErrorMessage: undefined | string;
  successfulPurchaseMessage: undefined | string;
  EmptyCartMessage: undefined | string;
  EmptyFavsMessage = false;

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.userLogged = true;
    } else if (localStorage.getItem('admin')) {
      this.userLogged = true;
    } else if (localStorage.getItem('newuser')) {
      this.userLogged = true;
    }
    this.loadDetails();
  }

  loadDetails() {
    if (localStorage.getItem('user')) {
      this.titleType = 'user'
      let favData = localStorage.getItem('localFavs');
      if (favData) {
        let items = JSON.parse(favData);
          let user = localStorage.getItem('user');
          if (user) {
            let userInfo = JSON.parse(user);
            let userId = user && userInfo[0].id;
            items.forEach((result: any) => {
              if (userId === result.userId) {
                console.log(result);
                this.favsData2.push(result)
              }
            });
          }

      }
      if (this.favsData2.length === 0) {
        this.EmptyFavsMessage = true
      } 
    } else if (localStorage.getItem('admin')) {
      this.titleType = 'admin'
      let favData = localStorage.getItem('localFavs');
      if (favData) {
        let items = JSON.parse(favData);        
        this.favsData = items;
        this.adminOrdersList = 'adminList'
          /* let admin = localStorage.getItem('admin');
          if (admin) {
            let adminInfo = JSON.parse(admin);
            let adminId = admin && adminInfo[0].id;
            items.forEach((result: any) => {
              if (adminId === result.userId) {
                this.favsData2.push(result)
              }
            });
          } */

      }
      if (this.favsData.length === 0) {
        this.EmptyFavsMessage = true
      } 
    } else if (localStorage.getItem('newuser')) {
      this.titleType = 'user'
      let favData = localStorage.getItem('localFavs');
      if (favData) {
        let items = JSON.parse(favData);
        console.log(items)
          let user = localStorage.getItem('newuser');
          if (user) {
            let userInfo = JSON.parse(user);
            let userId = user && userInfo.id;
            items.forEach((result: any) => {
              if (userId === result.userId) {
                this.favsData2.push(result)
              }
            });
          }

      }
      if (this.favsData2.length === 0) {
        this.EmptyFavsMessage = true
      } 
    }
    console.log(this.favsData.length)
  }

  /*  loadDetails() {
    let favsData = localStorage.getItem('localFavs');
    if (favsData) {
      let items = JSON.parse(favsData);
      this.favsData = items;
    }
  } */

  removeFromFavs(number: number) {
    this.product.removeItemFromFavs(number);
    this.loadDetails();
  }

  /* removeAllFavs() { */
    /* this.product.removeAllItemsFromFavs();
    this.loadDetails(); */
  /* } */
}
