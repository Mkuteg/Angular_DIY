// src/app/pages/shop/shop.module.ts

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import { SearchBarModule } from '../../components/search-bar/search-bar.module';

@NgModule({
  declarations: [
    ShopComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule
  ]
})
export class ShopModule {}