import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { Product } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  productList: undefined | Product[];
  productMessage: undefined | string;
  deleteIcon=faTrash;
  editIcon= faEdit;

  constructor(private product: ProductService) { }

  ngOnInit(): void {
    this.list();
  }

  deleteProduct(id: number){
    this.product.deleteProduct(id)
      .subscribe( ( result ) => {
        if(result){
          this.productMessage='Producto eliminado correctamente';
          this.list();
        }
        setTimeout(() => (this.productMessage = undefined), 1500)
      })
  }

  list() {
    this.product.productList()
    .subscribe( ( result ) => {
      this.productList=result;
    })
  }

}
