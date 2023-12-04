import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppStoreRoutingModule } from './app-store-routing.module';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AppStoreComponent } from './app-store.component';
import { HomeModule } from '../../views/home/home.module';

@NgModule({
  declarations: [AppStoreComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, AppStoreRoutingModule, HomeModule],
})
export class AppStoreModule {}
