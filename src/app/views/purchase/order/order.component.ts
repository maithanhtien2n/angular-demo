import { Component } from '@angular/core';
import { Index } from '../../../utils';
import { Router } from '@angular/router';
import { CartItem } from '../cart/cart.model';
import { CART_DATA } from '../cart/data';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrl: './order.component.scss',
})
export class OrderComponent {
  listCart: CartItem[] = CART_DATA.listCart;
  listOrderProduct: any[] = [];

  constructor(public index: Index, private router: Router) {
    const storedData = localStorage.getItem('listOrderProduct');

    if (storedData !== null) {
      this.listOrderProduct = JSON.parse(storedData);
    }
  }

  onCalculateTotalQuantity(price: any, priceSale: any, quantity: any) {
    if (priceSale) {
      return priceSale * quantity;
    } else {
      return price * quantity;
    }
  }

  onClickOrder() {
    alert('Đặt hàng thành công!');

    const mapProductId = this.listOrderProduct.map(
      ({ productId }) => productId
    );

    for (let i = 0; i < this.listCart.length; i++) {
      if (mapProductId.includes(this.listCart[i].productId)) {
        this.listCart.splice(i);
      }
    }

    this.router.navigate(['']);
  }

  ngOnInit() {}
}
