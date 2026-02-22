import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItemComponent } from '../product-item/product-item.component';
import { ProductService } from '../../services/product.service';
import { combineLatest } from 'rxjs';


@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItemComponent],
  template: `

  <div class="products-container">


      <div class="product-grid" *ngIf="filteredProducts.length > 0">
        <app-product-item 
          *ngFor="let product of filteredProducts" 
          [product]="product"
          (delete)="onDelete($event)">
        </app-product-item>
      </div>

      <div *ngIf="filteredProducts.length === 0" class="empty-state">
        <h3>Здесь пока ничего нет :(</h3>
        <p>Добавьте товары в {{ currentMode === 'cart' ? 'корзину' : 'избранное' }}, чтобы они появились здесь.</p>
        <button class="go-back-btn" (click)="showAll()">Перейти к покупкам</button>
      </div>
    </div>
  `,
  styles: [`

.product-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr); /* Те самые 3 товара в ряд */
      gap: 20px;
    }

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 60px 20px;
  background: #fff;
  border-radius: 12px;
  border: 1px dashed #ccc; /* Пунктирная рамка для стиля */
  margin: 20px 0;
}

.empty-icon {
  font-size: 50px;
  margin-bottom: 20px;
}

.empty-state h3 {
  color: #333;
  margin-bottom: 10px;
}

.empty-state p {
  color: #999;
  margin-bottom: 20px;
}

.go-back-btn {
  background: #0089d0;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s;
}

.go-back-btn:hover {
  background: #0071ad;
}
    .product-list-container {
      padding: 20px 0;
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
      gap: 0px;
    }
    
    .empty-message {
      text-align: center;
      padding: 40px;
      background: white;
      border-radius: 8px;
      color: #666;
      font-size: 16px;
    }
    
    
    @media (max-width: 768px) {
      .products-grid {
        grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
        gap: 12px;
      }
    }
  `]
})
export class ProductListComponent implements OnInit {
  @Input() products: Product[] = []; // Сюда всё еще могут приходить данные извне
  @Output() deleteProduct = new EventEmitter<number>();
  
  filteredProducts: Product[] = [];

  // ДОБАВЛЯЕМ КОНСТРУКТОР
  constructor(public productService: ProductService) {}

  ngOnInit() {
    // Теперь combineLatest импортирован и productService доступен
    combineLatest([
      this.productService.products$,
      this.productService.viewMode$
    ]).subscribe(([allProducts, mode]: [Product[], string]) => {
      if (mode === 'cart') {
        this.filteredProducts = allProducts.filter((p: Product) => p.isInCart);
      } else if (mode === 'favorite') {
        this.filteredProducts = allProducts.filter((p: Product) => p.isFavorite);
      } else {
        this.filteredProducts = allProducts;
      }
    });
  }

  onDelete(productId: number) {
    this.deleteProduct.emit(productId);
  }

  showAll() {
    this.productService.setMode('all');
  }

  get currentMode() {
    return this.productService.getViewModeValue(); 
  }
}