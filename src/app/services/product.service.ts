import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../interfaces/data.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient, private router: Router) {}

  productList() {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

  getProduct(id:string) : Observable<Product> {
    return this.http.get<Product>(`http://localhost:3000/products/${id}`);
  }

  popularProducts() : Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=3');
  }

  trendyProducts() : Observable<Product[]>{
    return this.http.get<Product[]>('http://localhost:3000/products?_limit=4');
  }
  
  addProduct(product: Product) : Observable<Product> {
    return this.http.post<Product>('http://localhost:3000/products', product);
  }

  updateProduct(product: Product) : Observable<Product> {
    return this.http.put<Product>(`http://localhost:3000/products/${product.id}`, product);
  }

  deleteProduct(id: number) : Observable<{}> {
    return this.http.delete(`http://localhost:3000/products/${id}`);
  }



}
