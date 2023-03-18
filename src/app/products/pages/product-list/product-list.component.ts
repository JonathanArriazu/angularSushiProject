import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/data.interfaces';
import { ProductService } from 'src/app/services/product.service';
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import { Subject, subscribeOn } from 'rxjs';
import { Category } from '../../../interfaces/data.interfaces';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  /* products!: Product[]; */
  PriceCheckboxCollapsed = true;
  IngredientsCheckboxCollapsed = true;
  priceCollapsed = true;
  ingredientCollapsed = true;
  notResultFound = false;
  /* products: undefined | Product[]; */
  downIcon = faCaretDown;  

  products: any = [];
  filteredProducts: any = []
  filteredProducts2: any = []
  filteredCategory: any = []

  constructor(private product: ProductService) {}

  ngOnInit(): void {
    this.product.productList().subscribe((data) => {
      this.products = data;
      this.filteredProducts = data
    });
  }

  showPalta = false;
  showSalmon = false;
  showPhiladelphia = false;
  showSalsaDeSoja = false;
  showZanahoria = false;
  showMorron = false;
  showZapallito = false;
  showCebolla = false;
  showBrotesDeSoja = false;
  showPollo = false;
  showPepino = false;
  showLechuga = false;
  showRucula = false;
  showTomates = false;
  showMayonesa = false;
  showCebollaDeVerdeo = false;
  showPrice1 = false;
  showPrice2 = false;
  showPrice3 = false;
  showPrice4 = false;
  showPrice5 = false;
   
  filterByIngredients() {
    this.filteredProducts = this.products.filter ((product: any) => {
      if (this.showPalta && product.ingredients.includes('Palta')) {
        return true
      }
      if (this.showSalmon && product.ingredients.includes('Salmón')) {
        return true
      }
      if (this.showPhiladelphia && product.ingredients.includes('Philadelphia')) {
        return true
      }
      if (this.showSalsaDeSoja && product.ingredients.includes('Salsa de Soja')) {
        return true
      }
      if (this.showZanahoria && product.ingredients.includes('Zanahoria')) {
        return true
      }
      if (this.showMorron && product.ingredients.includes('Morron')) {
        return true
      }
      if (this.showZapallito && product.ingredients.includes('Zapallito')) {
        return true
      }
      if (this.showCebolla && product.ingredients.includes('Cebolla')) {
        return true
      }
      if (this.showBrotesDeSoja && product.ingredients.includes('Brotes de Soja')) {
        return true
      }
      if (this.showPollo && product.ingredients.includes('Pollo')) {
        return true
      }
      if (this.showPepino && product.ingredients.includes('Pepino')) {
        return true
      }
      if (this.showLechuga && product.ingredients.includes('Lechuga')) {
        return true
      }
      if (this.showRucula && product.ingredients.includes('Rucula')) {
        return true
      }
      if (this.showTomates && product.ingredients.includes('Tomates')) {
        return true
      }
      if (this.showMayonesa && product.ingredients.includes('Mayonesa')) {
        return true
      }
      if (this.showCebollaDeVerdeo && product.ingredients.includes('Cebolla de Verdeo')) {
        return true
      }     
      return false  
    })  
  }

  filterByPrice() {
    /* this.filteredprice = this.filteredProducts.filter ((product: any) => {
      return (
        (minPrice ? product.price > minPrice : true) &&
        (maxPrice ? product.price <= maxPrice : true)
      )
    });
    console.log(this.filteredProducts)
    this.filteredProducts = this.filteredprice
    console.log(this.filteredProducts) */
    this.filteredProducts = this.products.filter ((product: any) => {
      if (this.showPrice1 && product.price < 300 ) {
        return true
      }
      if (this.showPrice2 && product.price > 300 && product.price < 400) {
        return true
      }
      if (this.showPrice3 && product.price > 400 && product.price < 500) {
        return true
      }
      if (this.showPrice4 && product.price > 500 && product.price < 600) {
        return true
      }
      if (this.showPrice5 && product.price > 600) {
        return true
      }         
      return false  
    })
  }

  filterAllProducts() {
    this.filteredProducts = this.products.filter ((product: any) => {
      if (this.showPalta && product.ingredients.includes('Palta')) {
        return true
      }
      if (this.showSalmon && product.ingredients.includes('Salmón')) {
        return true
      }
      if (this.showPhiladelphia && product.ingredients.includes('Philadelphia')) {
        return true
      }
      if (this.showSalsaDeSoja && product.ingredients.includes('Salsa de Soja')) {
        return true
      }
      if (this.showZanahoria && product.ingredients.includes('Zanahoria')) {
        return true
      }
      if (this.showMorron && product.ingredients.includes('Morron')) {
        return true
      }
      if (this.showZapallito && product.ingredients.includes('Zapallito')) {
        return true
      }
      if (this.showCebolla && product.ingredients.includes('Cebolla')) {
        return true
      }
      if (this.showBrotesDeSoja && product.ingredients.includes('Brotes de Soja')) {
        return true
      }
      if (this.showPollo && product.ingredients.includes('Pollo')) {
        return true
      }
      if (this.showPepino && product.ingredients.includes('Pepino')) {
        return true
      }
      if (this.showLechuga && product.ingredients.includes('Lechuga')) {
        return true
      }
      if (this.showRucula && product.ingredients.includes('Rucula')) {
        return true
      }
      if (this.showTomates && product.ingredients.includes('Tomates')) {
        return true
      }
      if (this.showMayonesa && product.ingredients.includes('Mayonesa')) {
        return true
      }    
      return false;
    })
    this.filteredProducts = this.filteredProducts.filter ((product: any) => {
      if (this.showPrice1 && product.price < 300 ) {
        return true
      }
      if (this.showPrice2 && product.price > 300 && product.price < 400) {
        return true
      }
      if (this.showPrice3 && product.price > 400 && product.price < 500) {
        return true
      }
      if (this.showPrice4 && product.price > 500 && product.price < 600) {
        return true
      }
      if (this.showPrice5 && product.price > 600) {
        return true
      }         
      return false  
    }) 
    if ((this.filteredProducts).length === 0) {
      this.notResultFound = true;
    } else {
      this.notResultFound = false;
    }
  }

  filterAll() {
    if((this.showPrice1 || this.showPrice2 || this.showPrice3 || this.showPrice4 || this.showPrice5) && (this.showPalta || this.showSalmon || this.showPhiladelphia || this.showSalsaDeSoja || this.showZanahoria || this.showMorron || this.showZapallito || this.showCebolla || this.showBrotesDeSoja || this.showPollo || this.showPepino  || this.showLechuga || this.showRucula || this.showTomates || this.showMayonesa)) {
      this.filterAllProducts();
    } else if (this.showPalta || this.showSalmon || this.showPhiladelphia || this.showSalsaDeSoja || this.showZanahoria || this.showMorron || this.showZapallito || this.showCebolla || this.showBrotesDeSoja || this.showPollo || this.showPepino  || this.showLechuga || this.showRucula || this.showTomates || this.showMayonesa) {
      this.filterByIngredients();
    } else if ( this.showPrice1 || this.showPrice2 || this.showPrice3 || this.showPrice4 || this.showPrice5) {
      this.filterByPrice();
      
    } else {
      console.log("Debe seleccionar alguna opcion para realizar el filtrado")
    }
    /* 
    this.filterByIngredients();
    this.filterAllProducts(); */
  }

  /* filterSearch() {
    this.filterAllProducts();
  } */
  
  /* price(minPrice: number, maxPrice: number) {
    this.product.productList().subscribe((products) => {
      this.products = products.filter((product) => {
        return (
          (minPrice ? product.price > minPrice : true) &&
          (maxPrice ? product.price <= maxPrice : true)
        )
      });
    });
  }

  ingredient(ingredient: string) {
    this.product.productList().subscribe((products) => {
      this.products = products.filter((product) => {
        return ingredient ? product.ingredients.includes(ingredient) : true;
      });
    });
  } */

  allPrices() {
    this.product.productList().subscribe((data) => {
      this.filteredProducts = data;
      /* this.products = data;   */    
    });
    this.showPalta = false;
    this.showSalmon = false;
    this.showPhiladelphia = false;
    this.showSalsaDeSoja = false;
    this.showZanahoria = false;
    this.showMorron = false;
    this.showZapallito = false;
    this.showCebolla = false;
    this.showBrotesDeSoja = false;
    this.showPollo = false;
    this.showPepino = false;
    this.showLechuga = false;
    this.showRucula = false;
    this.showTomates = false;
    this.showMayonesa = false;
    this.showCebollaDeVerdeo = false;
    this.showPrice1 = false;
    this.showPrice2 = false;
    this.showPrice3 = false;
    this.showPrice4 = false;
    this.showPrice5 = false;
    this.priceCollapsed = true;
    this.ingredientCollapsed = true;
  }

}
