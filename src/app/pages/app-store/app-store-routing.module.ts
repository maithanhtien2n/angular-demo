import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../../views/home/home.component';
import { AppStoreComponent } from './app-store.component';
import { ProductListComponent } from '../../views/purchase/product-list/product-list.component';
import { ProductDetailComponent } from '../../views/purchase/product-detail/product-detail.component';
import { CartComponent } from '../../views/purchase/cart/cart.component';
import { OrderComponent } from '../../views/purchase/order/order.component';

const routes: Routes = [
  {
    path: '',
    component: AppStoreComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'product',
        component: ProductListComponent,
      },
      {
        path: 'product/:id',
        component: ProductDetailComponent,
      },
      {
        path: 'cart',
        component: CartComponent,
      },
      {
        path: 'order',
        component: OrderComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppStoreRoutingModule {}
