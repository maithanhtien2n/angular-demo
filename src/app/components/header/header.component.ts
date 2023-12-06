import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CART_DATA } from '../../views/purchase/cart/data';
import { CartItem } from '../../views/purchase/cart/cart.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  listCart: CartItem[] = CART_DATA.listCart;
  items = ['Thông báo', 'Hỗ trợ', '|', 'Đăng nhập', 'Đăng ký'];

  constructor(private router: Router) {}

  onClickLogo() {
    this.router.navigate(['']);
  }

  onClickIconCart() {
    this.router.navigate(['/cart']);
  }
}
