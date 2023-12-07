import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import 'primeng/resources/themes/lara-light-blue/theme.css';
import 'primeng/resources/primeng.css';
import 'primeflex/primeflex.scss';
import 'primeicons/primeicons.css';

import { ButtonModule } from 'primeng/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { AppStoreModule } from './pages/app-store/app-store.module';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppStoreModule,
    ButtonModule,
    FormsModule,
  ],
  exports: [ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
