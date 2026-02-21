import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  template: `
    <div class="product-list-container">
      <div class="popular-header">
        <h2>Популярные</h2>
      </div>
      
      <div class="products-grid">
        @for (product of products; track product.id) {
          <app-product-card [product]="product"></app-product-card>
        }
      </div>
    </div>
  `,
  styles: [`
    .product-list-container {
      padding: 20px 0;
    }
    
    .popular-header {
      margin-bottom: 20px;
    }
    
    .popular-header h2 {
      font-size: 24px;
      font-weight: 600;
      color: #333;
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
      gap: 20px;
    }
    
    @media (max-width: 768px) {
      .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 12px;
      }
    }
    
    @media (max-width: 480px) {
      .products-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }
}
