import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="product-card">
      <div class="badges-container">
        <div class="badge-item red">0·0·24</div>
        <div class="badge-item green">{{ product.discount || 3 }}% Б</div>
      </div>
      
      <div class="product-image">
        <img [src]="product.image" [alt]="product.name">
      </div>
      
      <div class="product-info">
        <a href="#" class="product-name">{{ product.name }}</a>
        
        <div class="rating-row">
          <span class="stars">★★★★★</span>
          <span class="reviews-count">({{ product.reviews || 993 }} отзыва)</span>
        </div>
        
        <div class="price-main-line">
          <span class="current-price">{{ product.price | number:'1.0-0' }} ₸</span>
          <div class="installment-yellow-block">
            {{ product.monthlyPayment | number:'1.0-0' }} ₸ <span class="term">x{{ product.installmentMonths || 24 }}</span>
          </div>
        </div>

        <div class="installment-orange-text">
          В рассрочку {{ product.monthlyPayment | number:'1.0-0' }} ₸ x 24
        </div>
      </div>
    </div>
  `,
  styles: [`
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