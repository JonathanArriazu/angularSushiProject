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
  checkboxes = '';

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

  submit(c1: any,c2: any,c3: any,c4: any, c5: any, c6: any,c7: any,c8: any,c9: any, c10: any, c11: any,c12: any,c13: any,c14: any, c15: any, c16: any, data: Product) {
    if(this.productData){
      data.id=this.productData.id;
    }
    this.checkboxes = `${c1.checked ? 'Palta,' : ''} ${c2.checked ? 'Salmón,' : ''} ${c3.checked ? 'Philadelphia,' : ''} ${c4.checked ? 'Salsa de Soja,' : ''} ${c5.checked ? 'Zanahoria,' : ''} ${c6.checked ? 'Morron,' : ''} ${c7.checked ? 'Zapallito,' : ''} ${c8.checked ? 'Cebolla,' : ''} ${c9.checked ? 'Brotes de Soja,' : ''} ${c10.checked ? 'Pollo,' : ''} ${c11.checked ? 'Pepino,' : ''} ${c12.checked ? 'Lechuga,' : ''} ${c13.checked ? 'Rucula,' : ''} ${c14.checked ? 'Tomates,' : ''} ${c15.checked ? 'Mayonesa,' : ''} ${c16.checked ? 'Cebolla de Verdeo,' : ''}`
    data.ingredients = this.checkboxes
    this.product.updateProduct(data)
      .subscribe((result) => {
      if (result) {
        this.productMessage = 'Producto actualizado correctamente';
      }
    });
    setTimeout(() => (this.productMessage = undefined, this.router.navigate(['/admin-home'])), 1500)
  }

}
