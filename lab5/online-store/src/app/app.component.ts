import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderComponent } from './components/header/header.component';
import { Category } from './models/category.model';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, ProductListComponent],
  template: `
    <app-header></app-header>
    
    <div class="main-container">
      <aside class="sidebar-section">
        <div class="all-categories-link" (click)="selectCategory(0)">
          Все категории <span class="count">(1423549)</span>
        </div>

        <div class="parent-wrapper">
          <div class="parent-category-header" (click)="toggleExpand()">
            <span class="arrow" [class.rotated]="!isExpanded">▼</span>
            <span class="parent-title">Телефоны и гаджеты</span>
          </div>
          
          <div class="sub-categories" [class.hidden]="!isExpanded">
            @for (category of categories; track category.id) {
              @if (category.id !== 0) {
                <div class="category-group">
                  <div 
                    class="category-link"
                    [class.active]="selectedCategoryId === category.id"
                    (click)="selectCategory(category.id)">
                    <span class="dot">•</span>
                    <span class="link-text">{{ category.name }}</span>
                  </div>

                  @if (selectedCategoryId === category.id) {
                    <div class="brands-accordion">
                    @for (brand of getBrandsForCategory(category.id); track brand) {
                      <div class="brand-item" 
                      [class.active-brand]="selectedBrand === brand"
                      (click)="filterByBrand(brand)">
                      {{ brand }}
                      </div>
                    }
                      </div>
                  }
                </div>
              }
            }
          </div>
        </div>
      </aside>
      
      <main class="content-section">
      <div class="category-header">
  <h2 class="category-title">
    {{ selectedCategoryId === 0 ? 'Все товары' : getCategoryName(selectedCategoryId) }}
    
    @if (selectedBrand) {
      — {{ selectedBrand }}
    }
  </h2>
  <span class="product-count">{{ filteredProducts.length }} товара</span>
</div>
        
        <app-product-list 
          [products]="filteredProducts"
          (deleteProduct)="deleteProduct($event)">
        </app-product-list>
      </main>
    </div>
  `,
  styles: [`
    .main-container {
      max-width: 1000px;
      margin: 20px auto;
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 15px;
      padding: 0 15px;
    }

    .all-categories-link {
      color: #0089d0;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      margin-bottom: 15px;
    }

    .parent-category-header {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      user-select: none;
      margin-bottom: 10px;
    }

    .arrow { font-size: 10px; transition: transform 0.2s; }
    .arrow.rotated { transform: rotate(-90deg); }

    .parent-title { font-size: 14px; font-weight: 700; color: #333; }

    .sub-categories {
      display: flex;
      flex-direction: column;
      gap: 8px;
      padding-left: 20px;
      overflow: hidden;
      max-height: 1000px;
      transition: max-height 0.3s ease-out;
    }
    .sub-categories.hidden { max-height: 0; }

    .category-group { margin-bottom: 5px; }

    .category-link {
      display: flex;
      align-items: center;
      gap: 8px;
      font-size: 13px;
      color: #0089d0;
      cursor: pointer;
      padding: 2px 0;
    }

    .dot { color: #ccc; font-size: 18px; line-height: 0; }

    .category-link.active .link-text { color: #333; font-weight: 700; }
    .category-link:hover .link-text { text-decoration: underline; }

    /* Бренды */
    .brands-accordion {
      padding-left: 25px;
      margin: 8px 0;
      display: flex;
      flex-direction: column;
      gap: 6px;
      border-left: 1px solid #eee;
    }

    .brand-item { font-size: 12px; color: #0089d0; cursor: pointer; }
    .brand-item:hover { text-decoration: underline; }
    .brand-item.active-brand { color: #f44336; font-weight: 700; }

    .category-header {
      display: flex;
      align-items: baseline; gap: 12px;
      margin-bottom: 20px; border-bottom: 1px solid #eee; padding-bottom: 10px;
    }
    .category-title { font-size: 20px; font-weight: 700; margin: 0; }
    .product-count { color: #999; font-size: 13px; }
    .brand-item.active-brand {
      color: #f44336; /* Цвет Kaspi */
      font-weight: 700;
      position: relative;
    } 
  `]
})
export class AppComponent {
  categories: Category[] = [];
  products: Product[] = [];
  selectedCategoryId: number = 0;
  selectedBrand: string | null = null;
  isExpanded: boolean = true;

  constructor(private productService: ProductService) {
    this.categories = this.productService.getCategories();
    this.products = this.productService.getProducts();
  }

  toggleExpand() {
    this.isExpanded = !this.isExpanded;
  }

  // Находим уникальные бренды только для выбранной категории
 // Внутри класса AppComponent
getBrandsForCategory(categoryId: number): string[] {
  // 1. Берем все товары
  const allProducts = this.productService.getProducts();

  // 2. Если категория не выбрана (0), берем все бренды. 
  // Если выбрана — только товары этой категории.
  const filteredProducts = categoryId === 0 
    ? allProducts 
    : allProducts.filter(p => p.categoryId === categoryId);

  // 3. Достаем только названия брендов и убираем дубликаты через Set
  const uniqueBrands = [...new Set(filteredProducts.map(p => p.brand))];
  
  return uniqueBrands;
}

  get filteredProducts(): Product[] {
    let result = this.products;
    if (this.selectedCategoryId !== 0) {
      result = result.filter(p => p.categoryId === this.selectedCategoryId);
    }
    if (this.selectedBrand) {
      result = result.filter(p => p.brand === this.selectedBrand);
    }
    return result;
  }

  selectCategory(categoryId: number) {
    this.selectedCategoryId = categoryId;
    this.selectedBrand = null;
    
    // ГЛАВНОЕ: сообщаем сервису, чтобы он отфильтровал товары
    this.productService.filterByCategory(categoryId);
    // Сбрасываем режим на 'all', чтобы выйти из корзины, если мы в ней были
    this.productService.setMode('all');
  }

  filterByBrand(brand: string) {
    this.selectedBrand = this.selectedBrand === brand ? null : brand;
    // Сообщаем сервису, что нужно отфильтровать по бренду
    this.productService.filterByBrand(this.selectedCategoryId, this.selectedBrand);
  }

  getCategoryName(categoryId: number): string {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }

  deleteProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}