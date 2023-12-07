import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './components/banner/banner.component';
import { HomeComponent } from './home.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { ProductItemModule } from '../purchase/product-list/components/product-item/product-item.module';

@NgModule({
  declarations: [HomeComponent, BannerComponent, MenuItemComponent],
  imports: [CommonModule, ProductItemModule],
})
export class HomeModule {}
