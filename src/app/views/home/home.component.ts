import { Component } from '@angular/core';
import { MenuItem } from './home.model';
import { HOME_DATA } from './data';
import { ProductItem } from '../purchase/product-list/product-list.model';
import { PRODUCT_DATA } from '../purchase/product-list/data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  listMenu: MenuItem[] = HOME_DATA.listMenu;

  listProduct: ProductItem[] = PRODUCT_DATA.listProduct;

  constructor() {
    window.scrollTo(0, 0);
  }
}
