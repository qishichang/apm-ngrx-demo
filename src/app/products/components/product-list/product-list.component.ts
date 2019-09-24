import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Product } from '../../product';

@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  pageTitle = 'Products';

  @Input()
  displayCode: boolean;

  @Input()
  products: Product[];

  // Used to highlight the selected product in the list
  @Input()
  selectedProduct: Product | null;

  @Input()
  errorMessage: string;

  @Output()
  checked = new EventEmitter<boolean>();

  @Output()
  initializeNewProduct = new EventEmitter<void>();

  @Output()
  selected = new EventEmitter<Product>();

  constructor() { }


  checkChanged(value: boolean): void {
    this.checked.emit(value);
  }

  newProduct(): void {
    this.initializeNewProduct.emit();
  }

  productSelected(product: Product): void {
    this.selected.emit(product);
  }
}
