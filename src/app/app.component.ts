import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
filterValue: string  = "";

productsForFilter: Product[] = [
  {name: 'apple', rank: 5},
  {name: 'paple', rank: 10},
  {name: 'maple', rank: 13},
  {name: 'pineaple', rank: 3},
  ];
  products: Product [] = this.productsForFilter;
  
  filterCollection(text) {
    this.products = this.productsForFilter.filter(p => p.name.includes(text.value));
  }
}
