import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
  <h1>ПРОВЕРКА СВЯЗИ 123</h1>
    <div class="product-card">
  <img [src]="product.image" class="product-img">
  <h3 class="product-title">{{ product.name }}</h3>

  <div class="rating">⭐⭐⭐⭐⭐ <span class="reviews">(993)</span></div>

  <div class="installment-label">В рассрочку</div>

  <div class="installment-badge">
    {{ (product.price / 12) | number:'1.0-0' }} ₸ <span class="per-month">x 12</span>
  </div>

  <div class="full-price">
    {{ product.price | number:'1.0-0' }} ₸
  </div>

  <div class="footer-actions">
          <button class="share-btn" (click)="onShare()">
            поделиться товаром
          </button>
          
          <button class="buy-btn" (click)="onAddToCart()" [class.in-cart]="product.isInCart">
            {{ product.isInCart ? 'в корзине' : 'добавить в корзину' }}
          </button>
        </div>
</div>
  `,
  styles: [`
  .footer-actions {
      display: flex;
      gap: 8px;
      margin-top: auto; /* Прижимает к низу */
      width: 100%;
    }
    .product-card {
      background: #fff;
      border-radius: 8px;
      padding: 12px;
      position: relative;
      border: 1px solid #efefef;
      height: 100%;
      display: flex;
      flex-direction: column;
    }

    /* Бейджи один под другим */
    .badges-container {
      position: absolute;
      top: 10px;
      left: 10px;
      display: flex;
      flex-direction: column;
      gap: 4px;
      z-index: 2;
    }

    .badge-item {
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 11px;
      font-weight: 700;
      color: #fff;
      width: fit-content;
    }
    .badge-item.red { background: #ff3b30; }
    .badge-item.green { background: #4cd964; }

    .product-image {
      height: 160px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 12px;
    }
    .product-image img {
      max-width: 100%;
      max-height: 100%;
      object-fit: contain;
    }

    .product-name {
      font-size: 14px;
      color: #0089d0;
      text-decoration: none;
      display: block;
      margin-bottom: 6px;
      line-height: 1.2;
      height: 34px;
      overflow: hidden;
    }

    .rating-row {
      display: flex;
      align-items: center;
      gap: 4px;
      margin-bottom: 10px;
    }
    .stars { color: #ff3d00; font-size: 12px; }
    .reviews-count { color: #999; font-size: 12px; }

    /* Флекс-контейнер для цены и желтой плашки */
    .price-main-line {
      display: flex;
      align-items: center;
      gap: 8px;
      margin-bottom: 6px;
    }

    .current-price {
      font-size: 18px;
      font-weight: 700;
      color: #333;
    }

    .installment-yellow-block {
      background: #ffda1a;
      padding: 2px 6px;
      border-radius: 4px;
      font-size: 13px;
      font-weight: 700;
      color: #333;
    }
    .installment-yellow-block .term {
      font-weight: 400;
      color: #666;
      font-size: 11px;
    }

    /* Оранжевый текст без фона */
    .installment-orange-text {
      color: #ff5722;
      font-size: 12px;
      font-weight: 500;
    }
  `]
})
export class ProductCardComponent {
  @Input() product!: Product;
}