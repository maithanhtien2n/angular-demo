import { Component } from '@angular/core';
import { Params, Router } from '@angular/router';
import { CART_DATA } from '../../views/purchase/cart/data';
import { CartItem } from '../../views/purchase/cart/cart.model';
import { ProductItem } from '../../views/purchase/product-list/product-list.model';
import { PRODUCT_DATA } from '../../views/purchase/product-list/data';
import { Index } from '../../utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  listProduct: ProductItem[] = PRODUCT_DATA.listProduct;
  listCart: CartItem[] = CART_DATA.listCart;
  items = ['Thông báo', 'Hỗ trợ', '|', 'Đăng nhập', 'Đăng ký'];
  isShowSearch: boolean = false;
  keySearch: string = '';
  listProductFilter: ProductItem[] = [];

  constructor(private router: Router, private index: Index) {}

  onClickLogo() {
    this.keySearch = '';
    this.router.navigate(['']);
  }

  onClickIconCart() {
    this.router.navigate(['/cart']);
  }

  onSearch() {
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
      this.isShowSearch = false;
      return [];
    }
  }

  onInputSearch() {
    this.isShowSearch = true;
    this.listProductFilter = this.onSearch();
  }

  onClickItemProduct(product: ProductItem) {
    this.keySearch = product.name;
    this.isShowSearch = false;
  }

  onClickInputSearch() {
    if (this.keySearch) {
      this.isShowSearch = true;
    }
  }

  onClickIconSearch() {
    const queryParams: Params = { key: this.keySearch };
    this.router.navigate(['product'], { queryParams });
    this.isShowSearch = false;
  }

  onClickIconLogin(type: string) {
    if (type === 'Đăng nhập') {
      this.router.navigate(['login']);
    }

    if (type === 'Đăng ký') {
      this.router.navigate(['register']);
    }
  }
}
