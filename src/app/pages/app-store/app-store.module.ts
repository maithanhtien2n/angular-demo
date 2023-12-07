import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStoreRoutingModule } from './app-store-routing.module';
import { FooterComponent } from '../../components/footer/footer.component';
import { AppStoreComponent } from './app-store.component';
import { OrderComponent } from '../../views/purchase/order/order.component';

import { HomeModule } from '../../views/home/home.module';
import { ProductDetailModule } from '../../views/purchase/product-detail/product-detail.module';
import { CartModule } from '../../views/purchase/cart/cart.module';
import { HeaderModule } from '../../components/header/header.module';
import { ProductListModule } from '../../views/purchase/product-list/product-list.module';

@NgModule({
  declarations: [AppStoreComponent, FooterComponent, OrderComponent],
  imports: [
    CommonModule,
    AppStoreRoutingModule,
    HeaderModule,
    HomeModule,
    ProductListModule,
    ProductDetailModule,
    CartModule,
  ],
})
export class AppStoreModule {}
