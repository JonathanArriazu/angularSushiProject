import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts: undefined | Product[];
  trendyProducts: undefined | Product[];


  constructor( private product: ProductService ) { }

  ngOnInit(): void {
    this.product.popularProducts()
      .subscribe((data)=> {
        this.popularProducts=data;
      });
      this.product.productList()
        .subscribe((data)=>{
          this.trendyProducts=data;
          this.trendyProducts=this.trendyProducts.filter((property) => {
            return property.popular === true;
          })
        })
  }



}
