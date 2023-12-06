import { Component } from '@angular/core';
import { CartItem } from './cart.model';
import { CART_DATA } from './data';
import { ProductItem } from '../product-list/product-list.model';
import { PRODUCT_DATA } from '../product-list/data';
import { Index } from '../../../utils';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {
  listProduct: ProductItem[] = PRODUCT_DATA.listProduct;
  listCart: CartItem[] = CART_DATA.listCart;
  selectAll: boolean = false;
  selectItem: { item: CartItem; isSelect: boolean | false }[] = [];

  constructor(public index: Index) {
    this.listCart.forEach((item) => {
      this.selectItem.push({ item: item, isSelect: false });
    });
  }

  onClickChangeQuantity(type: string, index: number) {
    if (type === 'plus') {
      this.listCart[index].quantity += 1;
    }
    if (type === 'minus') {
      this.listCart[index].quantity -= 1;
    }
  }

  onReturnProductDetail(productId: number): ProductItem | null {
    const product = this.listProduct.find(({ id }) => id === productId);
    if (product) {
      return product;
    } else {
      return null;
    }
  }

  onCalculateTotalQuantity(price: any, priceSale: any, quantity: any) {
    if (priceSale) {
      return priceSale * quantity;
    } else {
      return price * quantity;
    }
  }

  onClickSelectAll() {}

  onClickSelectItem() {}
}
