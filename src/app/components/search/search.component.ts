import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ProductItem } from '../../views/purchase/product-list/product-list.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.scss',
})
export class SearchComponent {
  @Input() value!: ProductItem[];
  @Output() clickItemProduct: EventEmitter<ProductItem> =
    new EventEmitter<ProductItem>();

  constructor(private router: Router) {}

  onClickItemProduct(product: ProductItem) {
    this.router.navigate(['product', product.id]);
    this.clickItemProduct.emit(product);
  }
}
