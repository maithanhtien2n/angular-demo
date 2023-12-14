import { Component } from '@angular/core';
import { ProductItem } from './product-list.model';
import { PRODUCT_DATA } from './data';
import { ActivatedRoute } from '@angular/router';
import { Index } from '../../../utils';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  listProduct: ProductItem[] = PRODUCT_DATA.listProduct;
  keySearch: string = '';

  constructor(private route: ActivatedRoute, private index: Index) {
    this.route.queryParams.subscribe((queryParams) => {
      if (queryParams !== null) {
        this.keySearch = queryParams['key'];
      }
    });

    window.scrollTo(0, 0);
  }

  onReturnProducts() {
    if (this.keySearch) {
      return this.listProduct
        .filter(
          (item) =>
            this.index
              .removeAccents(item.name)
              .includes(this.index.removeAccents(this.keySearch)) ||
            this.index
              .removeAccents(item.description)
              .includes(this.index.removeAccents(this.keySearch))
        )
        .splice(0, 5);
    } else {
      return this.listProduct;
    }
  }
}
