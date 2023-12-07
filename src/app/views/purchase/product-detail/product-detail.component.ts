import { Component } from '@angular/core';
import { PRODUCT_DETAIL_DATA } from './data';
import { ActivatedRoute, Router } from '@angular/router';
import { CART_DATA } from '../cart/data';
import { CartItem } from '../cart/cart.model';
import { ProductItem } from '../product-list/product-list.model';
import { PRODUCT_DATA } from '../product-list/data';
import { Index } from '../../../utils';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent {
  productList: ProductItem[] = PRODUCT_DATA.listProduct;
  listCart: CartItem[] = CART_DATA.listCart;
  productInfo: CartItem = {
    productId: 0,
    color: '',
    quantity: 1,
  };
  message: string = '';

  constructor(
    private route: ActivatedRoute,
    public index: Index,
    private router: Router
  ) {
    const colorFilter = this.onReturnProductDetail()?.type.find(
      ({ isSelect }) => isSelect
    );
    if (colorFilter && colorFilter.name) {
      this.productInfo.color = colorFilter.name;
    }
  }

  onReturnProductDetail() {
    return this.productList.find(({ id }) => id === this.productInfo.productId);
  }

  onClickItemColor(index: number) {
    const productDetail = this.onReturnProductDetail();

    if (productDetail && productDetail.type) {
      for (let i = 0; i < productDetail.type.length; i++) {
        if (i === index) {
          productDetail.type[i].isSelect = true;
          this.productInfo.color = productDetail.type[i].name;
        } else {
          productDetail.type[i].isSelect = false;
        }
      }
    }
  }

  onKeyPress(event: KeyboardEvent): void {
    // Lấy ký tự vừa được nhập
    const char = event.key;

    // Lấy giá trị của trường input
    const inputValue = (event.target as HTMLInputElement).value;

    // Kiểm tra xem ký tự có phải là số hay không
    if (isNaN(Number(char))) {
      // Nếu không phải số, ngăn chặn sự kiện
      event.preventDefault();
    }

    if (inputValue.length + 1 === 1 && +char === 0) {
      event.preventDefault();
    }
  }

  onChangeQuantity(event: Event) {
    // Lấy giá trị của trường input
    const inputValue = (event.target as HTMLInputElement).value;

    if (!inputValue.length) {
      this.productInfo.quantity = 1;
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
    if (!this.productInfo.color) {
      alert('Vui lòng chọn màu sắc sản phẩm');
      return;
    }

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
    }, 1000);
  }

  onReturnProduct() {
    const productDetail = this.onReturnProductDetail();

    if (productDetail && productDetail.priceSale && productDetail.price) {
      return {
        ...this.productInfo,
        ...productDetail,
        totalAmount: {
          sum: this.index.formatCurrencyVND(
            productDetail.priceSale
              ? productDetail.priceSale * +this.productInfo.quantity
              : productDetail.price * +this.productInfo.quantity
          ),
          sumNumber: +productDetail.priceSale
            ? productDetail.priceSale * +this.productInfo.quantity
            : productDetail.price * +this.productInfo.quantity,
          amount: 1,
        },
      };
    } else {
      return {};
    }
  }

  onClickBuyNow() {
    if (!this.productInfo.color) {
      alert('Vui lòng chọn màu sắc sản phẩm');
      return;
    }

    localStorage.setItem(
      'listOrderProduct',
      JSON.stringify([this.onReturnProduct()])
    );

    this.router.navigate(['order']);
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
