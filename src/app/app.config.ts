import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { HomeComponent } from './pages/home/home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { SellerDashboardComponent } from './pages/seller-dashboard/seller-dashboard.component';
import { ContactComponent } from './pages/contact/contact.component';
import { routes } from './app.routes';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductListComponent,
    ProductDetailComponent,
    UserProfileComponent,
    SearchBarComponent,
    ShopComponent,
    SellerDashboardComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: []
})
export class AppModule { }

export class ContactModule {}