import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';


@Component({
  selector: 'app-admin-add-product',
  templateUrl: './admin-add-product.component.html',
  styleUrls: ['./admin-add-product.component.css']
})
export class AdminAddProductComponent implements OnInit {

  addProductMessage: string | undefined;

  constructor( private product: ProductService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  submit(data: Product) {
    this.product.addProduct(data)
      .subscribe(( result ) => {
        if(result){
          this.addProductMessage='Producto agregado correctamente';
        }
        setTimeout(() => (this.addProductMessage = undefined, this.router.navigate(['/admin-home']) ), 1500)
      })
  }

}
