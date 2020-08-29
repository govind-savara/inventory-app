import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

import { Product } from './../product.model';

/**
 *
 *
 * @export
 * @class ProductsListComponent
 * @description A component for rendering all ProductRows and
 * storing the currently selected Product
 * @implements {OnInit}
 */
@Component({
  selector: 'products-list',
  templateUrl: './products-list.component.html'
})
export class ProductsListComponent implements OnInit {

  @Input() productList: Product[];

  @Output() onProductSelected: EventEmitter<Product>;

  private currentProduct: Product;

  constructor() {
    this.onProductSelected = new EventEmitter();
  }

  ngOnInit() {
  }

  clicked(product: Product): void {
    this.currentProduct = product;
    this.onProductSelected.emit(product);
  }

  isSelected(product: Product): boolean {
    if (!product || !this.currentProduct) {
      return false;
    }

    return product.sku === this.currentProduct.sku;
  }

}
