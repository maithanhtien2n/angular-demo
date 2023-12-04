import { Component, Input } from '@angular/core';
import { ProductItem } from '../../home.model';
import { Index } from '../../../../utils';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrl: './product-item.component.scss',
})
export class ProductItemComponent {
  @Input() item!: ProductItem;

  constructor(public index: Index, private router: Router) {}

  onClickSeeDetails() {
    this.router.navigate(['product/000001111']);
  }
}
