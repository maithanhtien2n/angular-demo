import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductDetailComponent],
  imports: [CommonModule, FormsModule],
})
export class ProductDetailModule {}
