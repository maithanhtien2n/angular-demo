import { Component } from '@angular/core';
import { MenuItem, ProductItem } from './home.model';
import { HOME_DATA } from './data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  listMenu: MenuItem[] = HOME_DATA.listMenu;

  listProduct: ProductItem[] = HOME_DATA.listProduct;
}
