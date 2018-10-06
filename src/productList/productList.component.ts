import { Component, Input } from '@angular/core';

@Component({
  selector: 'product-list',
  templateUrl: './productList.component.html'
})

export class ProductListComponent {
    @Input() public products;
}