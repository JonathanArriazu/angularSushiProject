import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  productData: undefined | Product;

  constructor( private activatedRoute: ActivatedRoute,
               private product: ProductService ) { }

  ngOnInit(): void {
    /* let productId = this.activatedRoute.snapshot.paramMap.get('productId');
    productId && this.product.getProduct(productId)
                  .subscribe((result)=> {
                    this.productData=result;
                  }) */
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.product.getProduct(id) )
      )
      .subscribe( productData => this.productData = productData)
  }

}
