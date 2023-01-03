import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products!: Product[];

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.productList()
      .subscribe((data)=> {
        this.products=data;
      });
  }

}
