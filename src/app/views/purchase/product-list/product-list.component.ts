import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss',
})
export class ProductListComponent {
  items = ['Thông báo', 'Hỗ trợ', '|', 'Đăng nhập', 'Đăng ký'];
}
