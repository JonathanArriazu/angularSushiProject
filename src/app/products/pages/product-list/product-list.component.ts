import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';
import { faCaretDown} from '@fortawesome/free-solid-svg-icons'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  /* products!: Product[]; */
  priceCollapsed = true;
  ingredientCollapsed = true;
  products: undefined | Product[];
  downIcon=faCaretDown;
  filteredProducts: undefined | boolean | Product[];
  filers = ["Palta"]

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.product.productList()
      .subscribe((data)=> {
        this.products=data;
      });
  }

  price (minPrice: number, maxPrice: number) {
    this.product.productList()
      .subscribe((products) => {
        this.products = products.filter( product => {
          return (minPrice ? product.price > minPrice : true) && (maxPrice? product.price <=maxPrice: true)
        })
      })
  }  

  ingredient(ingredient: string) {
    this.product.productList()
      .subscribe((products)=> {
        this.products = products.filter( product => {
          return ( ingredient? (product.description).includes(ingredient) : true)
        })   
      });
  }

  allPrices() {
    this.product.productList()
      .subscribe((data)=> {
        this.products=data;
      });
  }

}
