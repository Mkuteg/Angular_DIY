import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from '../pages/home/home.component';
import { ShopComponent } from '../pages/shop/shop.component';
import { SellerDashboardComponent } from '../pages/seller-dashboard/seller-dashboard.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { ProductDetailComponent } from '../components/product-detail/product-detail.component';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'seller-dashboard', component: SellerDashboardComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'product/:id', component: ProductDetailComponent },
  { path: 'user/:username', component: UserProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }