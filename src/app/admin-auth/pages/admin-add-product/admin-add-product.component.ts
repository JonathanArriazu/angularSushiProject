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

  checkboxes = '';
  addProductMessage: string | undefined;

  constructor( private product: ProductService,
               private router: Router ) { }

  ngOnInit(): void {
  }

  submit(c1: any,c2: any,c3: any,c4: any, c5: any, c6: any,c7: any,c8: any,c9: any, c10: any, c11: any,c12: any,c13: any,c14: any, c15: any, c16: any, data: Product) {
    this.checkboxes = `${c1.checked ? 'Palta,' : ''} ${c2.checked ? 'Salmón,' : ''} ${c3.checked ? 'Philadelphia,' : ''} ${c4.checked ? 'Salsa de Soja,' : ''} ${c5.checked ? 'Zanahoria,' : ''} ${c6.checked ? 'Morron,' : ''} ${c7.checked ? 'Zapallito,' : ''} ${c8.checked ? 'Cebolla,' : ''} ${c9.checked ? 'Brotes de Soja,' : ''} ${c10.checked ? 'Pollo,' : ''} ${c11.checked ? 'Pepino,' : ''} ${c12.checked ? 'Lechuga,' : ''} ${c13.checked ? 'Rucula,' : ''} ${c14.checked ? 'Tomates,' : ''} ${c15.checked ? 'Mayonesa,' : ''} ${c16.checked ? 'Cebolla de Verdeo,' : ''}`
    data.ingredients = this.checkboxes
    this.product.addProduct(data)
      .subscribe(( result ) => {
        if(result){
          this.addProductMessage='Producto agregado correctamente';
        }
        setTimeout(() => (this.addProductMessage = undefined, this.router.navigate(['/admin-home']) ), 1500)
      })
  }

  

  /* getSelectedOptions(c1: any,c2: any,c3: any,c4: any, c5: any, c6: any,c7: any,c8: any,c9: any, c10: any, c11: any,c12: any,c13: any,c14: any, c15: any, c16: any) {
    this.checkboxes = `${c1.checked ? 'Palta' : ''} ${c2.checked ? 'Salmón' : ''} ${c3.checked ? 'Philadelphia' : ''} ${c4.checked ? 'Salsa de Soja' : ''} ${c5.checked ? 'Zanahoria' : ''} ${c6.checked ? 'Morron' : ''} ${c7.checked ? 'Zapallito' : ''} ${c8.checked ? 'Cebolla' : ''} ${c9.checked ? 'Brotes de Soja' : ''} ${c10.checked ? 'Pollo' : ''} ${c11.checked ? 'Pepino' : ''} ${c12.checked ? 'Lechuga' : ''} ${c13.checked ? 'Rucula' : ''} ${c14.checked ? 'Tomates' : ''} ${c15.checked ? 'Mayonesa' : ''} ${c16.checked ? 'Cebolla de Verdeo' : ''}`

  } */


}
