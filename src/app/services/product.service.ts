import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product, UserOrders, UserCart, AdminCart, AdminOrders } from '../interfaces/data.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  cartData = new EventEmitter<Product[] | []>();
  favsData = new EventEmitter<Product[] | []>();
  constructor(private http: HttpClient, private router: Router) {}

  productList() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  popularProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=3');
  }

  trendyProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=6');
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }

  deleteProduct(id: number): Observable<{}> {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }

  addToCartProduct(data: Product) {
    let cartData = [];
    let localCart = localStorage.getItem('localCart');
    if (!localCart) {
      localStorage.setItem('localCart', JSON.stringify([data]));
    } else {
      cartData = JSON.parse(localCart);
      if(cartData !== "undefined") {
        cartData.push(data);
      }
      localStorage.setItem('localCart', JSON.stringify(cartData));
    }
    this.cartData.emit(cartData);
  }

  removeItemFromCart(productId: number) {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: Product[] = JSON.parse(cartData);
      items = items.filter((item: Product) => productId !== item.id); /* Creo un nuevo array con todos los elementos que cumplan la condicion (todos los que tenga id diferente al productId) */
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items)
    }
  }

  removeAllItemsFromCart () {
    let cartData = localStorage.getItem('localCart');
    if (cartData) {
      let items: Product[] = JSON.parse(cartData);
      items = [];
      localStorage.setItem('localCart', JSON.stringify(items));
      this.cartData.emit(items)
    }
  }

  addToFavsProduct(data: Product) {
    let favsData = [];
    let localFavs = localStorage.getItem('localFavs');
    if (!localFavs) { /* Si estoy agregando al carrito por primera vez, entonces, creo el localCart */
      localStorage.setItem('localFavs', JSON.stringify([data]));
    } else { /* Si ya tengo un carrito creado, continuo trabajando con este */
    favsData = JSON.parse(localFavs);
      if(favsData !== "undefined") {
        favsData.push(data);
      }
      localStorage.setItem('localFavs', JSON.stringify(favsData));
    }
    this.favsData.emit(favsData);    
  }

  removeItemFromFavs(productId: number) {
    let favsData = localStorage.getItem('localFavs');
    if (favsData) {
      let items: Product[] = JSON.parse(favsData);
      items = items.filter((item: Product) => productId !== item.id); /* Creo un nuevo array con todos los elementos que cumplan la condicion (todos los que tenga id diferente al productId) */
      localStorage.setItem('localFavs', JSON.stringify(items));
      this.favsData.emit(items)
    }
  }

  removeAllItemsFromFavs () {
    let favsData = localStorage.getItem('localFavs');
    if (favsData) {
      let items: Product[] = JSON.parse(favsData);
      items = [];
      localStorage.setItem('localFavs', JSON.stringify(items));
      this.favsData.emit(items)
    }
  }

  addUserOrders(cartData: UserCart) {
    return this.http.post('http://localhost:3000/userOrders', cartData)
  }

  addAdminOrders(cartData: AdminCart) {
    return this.http.post('http://localhost:3000/adminOrders', cartData)
  }


  getUserOrders() {
    return this.http.get<UserOrders[]>('http://localhost:3000/userOrders');
  }

  getAdminOrders() {
    return this.http.get<AdminOrders[]>('http://localhost:3000/adminOrders');
  }
}
