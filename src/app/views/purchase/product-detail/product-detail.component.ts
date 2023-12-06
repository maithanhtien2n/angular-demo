import { Component } from '@angular/core';
import { ColorItem } from './product-detail.model';
import { PRODUCT_DETAIL_DATA } from './data';
import { ActivatedRoute } from '@angular/router';
import { CART_DATA } from '../cart/data';
import { CartItem } from '../cart/cart.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  listCart: CartItem[] = CART_DATA.listCart;
  colorItem: ColorItem[] = PRODUCT_DETAIL_DATA.colorItem;
  productInfo: CartItem = {
    productId: 0,
    color: '',
    quantity: 1,
  };
  message: string = '';

  constructor(private route: ActivatedRoute) {}

  onClickItemColor(index: number) {
    for (let i = 0; i < this.colorItem.length; i++) {
      if (index === i) {
        this.colorItem[i].isSelect = true;
        this.productInfo.color = this.colorItem[i].name;
      } else {
        this.colorItem[i].isSelect = false;
      }
    }
  }

  onClickChangeQuantity(type: string) {
    if (type === 'plus') {
      this.productInfo.quantity += 1;
    }
    if (type === 'minus') {
      this.productInfo.quantity -= 1;
    }
  }

  onClickAddToCart() {
    let isDuplicate = this.listCart.find(
      ({ productId }) => productId === this.productInfo.productId
    );
    if (isDuplicate) {
      let index = this.listCart.indexOf(isDuplicate);
      this.listCart[index].quantity += { ...this.productInfo }.quantity;
    } else {
      this.listCart.push({ ...this.productInfo });
    }

    this.message = `Đã thêm ${
      { ...this.productInfo }.quantity
    } sản phẩm vào giỏ hàng`;
    setTimeout(() => {
      this.message = '';
    }, 2000);
  }

  ngOnInit() {
    this.route.paramMap.subscribe((params) => {
      const idParam = params.get('id');

      if (idParam !== null) {
        this.productInfo.productId = +idParam;
      }
    });
  }
}
