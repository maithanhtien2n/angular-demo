import { Component } from '@angular/core';
import { CartItem } from './cart.model';
import { CART_DATA } from './data';
import { ProductItem } from '../product-list/product-list.model';
import { PRODUCT_DATA } from '../product-list/data';
import { Index } from '../../../utils';
import { Router } from '@angular/router';

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

  constructor(public index: Index, private router: Router) {
    this.listCart.forEach((item) => {
      this.selectItem.push({ item: item, isSelect: false });
    });

    window.scrollTo(0, 0);
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

  onClickSelectAll() {
    for (let i = 0; i < this.selectItem.length; i++) {
      if (!this.selectAll) {
        this.selectItem[i].isSelect = true;
      } else {
        this.selectItem[i].isSelect = false;
      }
    }
  }

  onClickSelectItem(index: number) {
    this.selectItem[index].isSelect = !this.selectItem[index].isSelect;

    const selectItemLength = this.selectItem.filter(
      ({ isSelect }) => isSelect
    ).length;

    if (this.selectItem.length === selectItemLength) {
      this.selectAll = true;
    } else {
      this.selectAll = false;
    }
  }

  onDisabledButtonPay() {
    return !this.selectItem.filter(({ isSelect }) => isSelect).length;
  }

  onTotalAmount() {
    const totalAmount = this.selectItem.filter(({ isSelect }) => isSelect);
    const sum = totalAmount.reduce((accumulator, { item }) => {
      const product = this.onReturnProductDetail(item.productId);
      return (
        accumulator +
        this.onCalculateTotalQuantity(
          product?.price,
          product?.priceSale,
          item.quantity
        )
      );
    }, 0);

    return {
      sum: this.index.formatCurrencyVND(sum),
      sumNumber: +sum,
      amount: totalAmount.length,
    };
  }

  onClickDeleteCartItem(index: number) {
    this.listCart.splice(index, 1);
  }

  onClickDeleteCartAll() {
    for (let i = 0; i < this.selectItem.length; i++) {
      if (this.selectItem[i].isSelect) {
        this.listCart.splice(i);
      }
    }
  }

  onReturnProduct() {
    const productSelect = this.selectItem.filter(({ isSelect }) => isSelect);

    return productSelect.map(({ item }) => ({
      ...item,
      ...this.listProduct.find(({ id }) => id === item.productId),
      totalAmount: this.onTotalAmount(),
    }));
  }

  onClickPayCart() {
    localStorage.setItem(
      'listOrderProduct',
      JSON.stringify(this.onReturnProduct())
    );

    this.router.navigate(['order']);
  }
}
