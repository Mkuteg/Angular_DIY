import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../models/product';

@Component({
  selector: 'app-seller-dashboard',
  templateUrl: './seller-dashboard.component.html',
  styleUrls: ['./seller-dashboard.component.scss']
})
export class SellerDashboardComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    // Fetch the user's products from the backend
    this.productService.getProductsBySeller('user-id').subscribe(products => {
      this.products = products;
    });
  }

  createProduct() {
    // Implement logic to create a new product
  }

  updateProduct(product: Product) {
    // Implement logic to update an existing product
  }

  deleteProduct(productId: string) {
    // Implement logic to delete a product
  }
}