import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-update-product',
  templateUrl: './admin-update-product.component.html',
  styleUrls: ['./admin-update-product.component.css'],
})
export class AdminUpdateProductComponent implements OnInit {
  productData: undefined | Product;
  productMessage: undefined | string;

  constructor(private product: ProductService, 
              private activatedRoute: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    /* let productId = this.activatedRoute.snapshot.paramMap.get('id');
    productId &&
      this.product.getProduct(productId).subscribe((result) => {
        this.productData = result;
      }); */
      this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.product.getProduct(id) )
      )
      .subscribe( productData => this.productData = productData)
  }

  submit(data: Product) {
    if(this.productData){
      data.id=this.productData.id;
    }
    this.product.updateProduct(data)
      .subscribe((result) => {
      if (result) {
        this.productMessage = 'Producto actualizado correctamente';
      }
    });
    setTimeout(() => (this.productMessage = undefined, this.router.navigate(['/admin-home'])), 1500)
  }
}
