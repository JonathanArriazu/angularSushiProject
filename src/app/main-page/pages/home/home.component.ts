import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  popularProducts!: Product[];
  trendyProducts!: Product[];


  constructor( private product: ProductService ) { }

  ngOnInit(): void {
    this.product.popularProducts()
      .subscribe((data)=> {
        this.popularProducts=data;
      });
      this.product.trendyProducts()
        .subscribe((data)=>{
          this.trendyProducts=data;

          this.trendyProducts=this.trendyProducts.filter((element) => {
            return element.popular == true;
          })
        })
  }



}
