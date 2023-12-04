import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './home.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ProductItemComponent } from './components/product-item/product-item.component';

@NgModule({
  declarations: [HomeComponent, BannerComponent, MenuItemComponent, ProductItemComponent],
  imports: [CommonModule],
})
export class HomeModule {}
