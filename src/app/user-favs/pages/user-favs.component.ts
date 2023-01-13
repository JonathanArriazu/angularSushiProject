import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-user-favs',
  templateUrl: './user-favs.component.html',
  styleUrls: ['./user-favs.component.css']
})
export class UserFavsComponent implements OnInit {
date = new Date();
favsData = [];
userLogged = false;

  constructor(private product: ProductService, private router: Router) {}

  purchaseErrorMessage: undefined | string;
  successfulPurchaseMessage: undefined | string;
  EmptyCartMessage: undefined | string;

  ngOnInit(): void {
    if (localStorage.getItem('user')) {
      this.userLogged = true;
    } else if (localStorage.getItem('admin')) {
      this.userLogged = true;
    }
    this.loadDetails();
  }

  loadDetails() {
    let favsData = localStorage.getItem('localFavs');
    if (favsData) {
      let items = JSON.parse(favsData);
      this.favsData = items;
    }
  }

  removeFromFavs(number: number) {
    this.product.removeItemFromFavs(number);
    this.loadDetails();
  }

  removeAllFavs() {
    this.product.removeAllItemsFromFavs();
    this.loadDetails();
  }

}
