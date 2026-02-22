import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="card">
      <button class="wish-btn" (click)="toggleLike()" [class.liked]="product.isFavorite">
        <span class="icon">{{ product.isFavorite ? '❤️' : '🤍' }}</span>
      </button>

      <div class="badges-container">
        <div class="badge red">0·0·24</div>
        <div class="badge green">{{ product.discount || 3 }}% Б</div>
      </div>

      <div class="img-box">
        <img [src]="product.image" [alt]="product.name">
      </div>

      <div class="info">
      <a href="javascript:void(0)" class="name">{{ product.name }}</a>
        
        <div class="rating">
          <span class="stars">★★★★★</span>
          <span class="rev">({{ product.reviews }})</span>
        </div>

        <div class="price-container">
            <div class="price-block-main">
                <div class="price-label">Цена</div>
                <div class="main-price">{{ product.price | number:'1.0-0' }} ₸</div>
         </div>
          
          <div class="installment-block">
            <div class="installment-label">В рассрочку</div>
            <div class="price-row">
              <div class="yellow-tag">
                {{ product.monthlyPayment | number:'1.0-0' }} ₸ 
              </div>
              <span class="installment-months">x24</span>
            </div>
          </div>
        </div>

        <div class="actions-row">
          <button class="share-btn" (click)="onShare()">поделиться</button>
          <button class="cart-btn-main" (click)="toggleCart()" [class.in-cart]="product.isInCart">
            {{ product.isInCart ? 'добавлено' : 'в корзину' }}
          </button>
        </div>
      </div>
  `,
  styles: [`
    .card { 
      background: white; 
      border: 1px solid #f0f0f0; 
      border-radius: 8px; 
      padding: 12px; 
      position: relative; 
      display: flex;
      flex-direction: column;
      height: 100%;
      transition: box-shadow 0.2s;
    }
    .card:hover { box-shadow: 0 4px 12px rgba(0,0,0,0.08); }

    /* Лайк */
    .wish-btn { 
      position: absolute; top: 10px; right: 10px; 
      border: none; background: none; font-size: 20px; 
      cursor: pointer; z-index: 5; 
    }
    
    /* Бейджи один под другим */
    .badges-container {
      position: absolute; top: 10px; left: 10px;
      display: flex; flex-direction: column; gap: 4px;
    }
    .badge {
      padding: 2px 6px; border-radius: 4px;
      font-size: 10px; font-weight: 700; color: white;
      width: fit-content;
    }
    .badge.red { background: #ff3b30; }
    .badge.green { background: #4cd964; }

    .img-box { 
      height: 160px; display: flex; align-items: center; 
      justify-content: center; margin: 20px 0 10px; 
    }
    .img-box img { max-height: 100%; max-width: 100%; object-fit: contain; }

    .name { 
      font-size: 14px; color: #0089d0; text-decoration: none;
      display: block; height: 34px; overflow: hidden; line-height: 1.2;
    }
    .name:hover { text-decoration: underline; }

    .stars { color: #ff5722; font-size: 12px; }
    .rev { color: #999; font-size: 12px; margin-left: 4px; }

    .installment-label {
        text-align: left;
        color: #ff5722;
        font-size: 11px;
        font-weight: 700;
        margin-top: 8px;
    }

    .price-container {
      display: flex;
      align-items: flex-end; /* Выравнивает по нижней линии */
      justify-content: flex-start;
      gap: 12px;
      margin-top: 10px;
    }
    .price-block-main {
    display: flex;
    flex-direction: column;
    gap: 2px;
    }
    .price-label {
  color: #999; /* Серый цвет */
  font-size: 12px;
  font-weight: 600;
  line-height: 0;
}

    .price-row { 
      display: flex; 
      align-items: center; 
      gap: 4px; 
    }
    .main-price { 
      font-size: 22px; 
      font-weight: 700; 
      color: #333; 
      white-space: nowrap; /* Чтобы ₸ не падал вниз */
      line-height: 1.5;
      margin-bottom: 0px;
    }
    .installment-block {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .installment-label {
      color: #ff5722;
      font-size: 12px;
      font-weight: 600;
      line-height: 1;
    }
    
    .yellow-tag { 
      background: #ffda1a; 
      
      padding: 2px 8px; 
      border-radius: 4px; 
      white-space: nowrap;
      line-height: 1.7;
      font-size: 13px; 
      font-weight: 700;
      color: #333;
    }
    .installment-months {
      font-size: 12px;
      color: #999;
    }
.yellow-tag span { font-weight: 400; font-size: 10px; color: #666; }

    .footer-row { 
      display: flex; justify-content: space-between; 
      align-items: center; margin-top: auto; padding-top: 10px;
    }
    .orange-text { color: #ff5722; font-size: 11px; font-weight: 700;}

    .actions-row {
      display: flex;
      gap: 8px;
      margin-top: auto;
      padding-top: 12px;
    }
    
    .share-btn, .cart-btn-main {
  flex: 1; /* Кнопки делят место поровну */
  height: 36px;
  border: none;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 200;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: lowercase;
  transition: background 0.2s ease;
}
.cart-btn-main {
  background: #0089d0;
  color: white;
}
.cart-btn-main.in-cart { background: #f44336; } /* Красная, если в корзине */
.cart-btn-main.in-cart:hover { background: #d32f2f; }
.cart-btn-main:hover { background: #0071ad; text-decoration: underline;}
.plus {
  position: absolute;
  top: 4px;
  right: 6px;
  font-size: 12px;
  font-weight: bold;
}
.share-btn {
  background: #4cd964;
  color: white;
}
.share-btn:hover { background: #3dbd53; text-decoration: underline; }
  `]
})
export class ProductItemComponent {
  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  constructor(private productService: ProductService) {}

  onAddToCart(product: any) {
    this.productService.toggleCart(product.id);
    // Если хочешь уведомление, можно добавить alert
    if (product.isInCart) {
      alert('Товар добавлен в корзину!');
    }
  }
  
  onShare() {
    const url = window.location.href;
    navigator.clipboard.writeText(url);
    alert('Ссылка скопирована!');
  }

  shareProduct() {
    const url = window.location.href; // Или ссылка на товар
    navigator.clipboard.writeText(url).then(() => {
      alert('Ссылка скопирована в буфер обмена!');
    });
  }

  toggleLike() {
    this.productService.toggleFavorite(this.product.id);
  }

  toggleCart() {
    this.productService.toggleCart(this.product.id);
  }

  onDelete() {
    this.delete.emit(this.product.id);
  }
}