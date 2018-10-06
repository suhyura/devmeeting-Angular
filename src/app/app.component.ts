import { Component } from '@angular/core';
import { Productrepository } from '../productrepository.component';
import { ProductService } from '../productService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  productsForFilter$;
  filterValue: string  = "";

  products: Product[];
  constructor(productRepository: ProductService) {
    productRepository.getProducts().subscribe(response => {
      this.products = Object.values(response);
    });
   }
  filterCollection(text) {
    this.products = this.productsForFilter$.filter(p => p.name.includes(text.value));
  }
}
