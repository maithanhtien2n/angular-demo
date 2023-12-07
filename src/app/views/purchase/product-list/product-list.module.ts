import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterProductComponent } from './components/filter-product/filter-product.component';
import { ProductListComponent } from './product-list.component';
import { ProductItemModule } from './components/product-item/product-item.module';

@NgModule({
  declarations: [ProductListComponent, FilterProductComponent],
  imports: [CommonModule, ProductItemModule],
})
export class ProductListModule {}
