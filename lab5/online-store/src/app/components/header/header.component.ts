import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/product.service';



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="kaspi-header">
  <div class="header-container">
    
    <div class="top-nav">
      <div class="logo-section">
        <img src="assets/images/каспи иконка.svg" alt="Kaspi.kz" class="logo-img">
      </div>

      <div class="nav-center">
        <a href="#">Клиентам</a>
        <a href="#">Бизнесу</a>
        <a href="#">Kaspi Гид</a>
      </div>

      <div class="right-section">
        <div class="action-item" (click)="showFavorites()">
          <span class="icon">❤️</span>
          <span class="label">Избранное</span>
          <span class="badge" *ngIf="favoriteCount > 0">{{ favoriteCount }}</span>
        </div>

        <div class="action-item" (click)="showCart()">
          <div class="cart-wrapper">
            <span class="icon">🛒</span>
            <span class="badge" *ngIf="cartCount > 0">{{ cartCount }}</span>
          </div>
          <span class="label">Корзина</span>
        </div>
      </div>
    </div>
    
    <div class="search-row">
      <div class="search-bar-group">
        <div class="shop-label">Магазин</div>
        <input type="text" class="search-field" placeholder="Поиск товара">
        <button class="search-btn">🔍</button>
      </div>
      
      <div class="my-city-inline">
        <span class="city-label">Мой город:</span>
        <span class="city-name">Алматы</span>
      </div>
    </div>
    
    <nav class="sub-nav-categories">
      <a href="#" class="cat-item active">ВСЕ КАТЕГОРИИ</a>
      <a href="#" class="cat-item">ТЕЛЕФОНЫ И ГАДЖЕТЫ</a>
      <a href="#" class="cat-item">БЫТОВАЯ ТЕХНИКА</a>
      <a href="#" class="cat-item">ТВ, АУДИО, ВИДЕО</a>
      <a href="#" class="cat-item">КОМПЬЮТЕРЫ</a>
      <a href="#" class="cat-item">МЕБЕЛЬ</a>
      <a href="#" class="cat-item">КРАСОТА, ЗДОРОВЬЕ</a>
      <a href="#" class="cat-item">ДЕТСКИЕ ТОВАРЫ</a>
      <a href="#" class="cat-item">АПТЕКА</a>
    </nav>
  </div>
</header>
  `,
  styles: [`
    .kaspi-header { background: #fff; border-bottom: 1px solid #e0e0e0; font-family: Arial, sans-serif; }
    .header-container { max-width: 1200px; margin: 0 auto; padding: 0 15px; }

    .header-container { 
    max-width: 1000px; 
    margin: 0 auto; 
    padding: 0 20px; 
  }

  .top-nav { 
    display: flex; 
    align-items: center; 
    justify-content: space-between; /* Распределяет лого, центр и правую часть */
    height: 60px;
    position: relative;
  }
    .logo {
      flex: 5; /* Занимает пространство слева */
      display: flex;
      ustify-content: flex-start;
    }
    .nav-center {
    display: flex;
    gap: 25px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
  .nav-center a { 
    color: #999; 
    text-decoration: none; 
    font-size: 14px; 
  }
    .nav-links-wrapper {
      flex: 3; /* Даем больше места центру */
      display: flex;
      justify-content: center; /* Центрируем ссылки внутри этого блока */
    }
    
    .right-section {
    display: flex;
    align-items: center;
    gap: 25px; /* Расстояние между Избранным и Корзиной */
    margin-left: auto; /* Гарантирует, что блок прижат вправо */
    z-index: 10;
  }

    .logo-img { height: 35px; cursor: pointer; }
    
    .nav-links { display: flex; gap: 20px; }
    .nav-links a { color: #999; text-decoration: none; font-size: 14px; transition: 0.2s; }
    .nav-links a:hover { color: #333; }
    /* Избранное и корзина */
    .user-actions { display: flex; gap: 25px; }
    .action-item {
      display: flex;
      align-items: center;
      gap: 8px;
      cursor: pointer;
      padding: 5px 10px;
      border-radius: 4px;
      transition: all 0.2s ease;
      position: relative;
    }
    .action-item:hover {
      background-color: #f9f9f9;
    }
    .action-item .label { font-size: 14px; color: #333; }
    .action-item:hover .label {
      color: #000;
      text-decoration: underline; /* Черкает внизу  */
    }
    .action-item:hover .icon {
      transform: scale(1.5);
    }
    
    .cart-wrapper { position: relative; display: flex; align-items: center; }
    .badge { 
      position: absolute; 
      top: -5px; 
      left: 13px; 
      background: #f44336; 
      color: white; 
      font-size: 10px; 
      font-weight: bold;
      width: 16px;
      height: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
    }

    .search-row {
  display: flex;
  align-items: center; /* Центрируем город по высоте поиска */
  gap: 20px;
  margin: 15px 0;
  width: 100%;
}

    /* Группа поиска */
    .search-section {
    display: flex;
    justify-content: flex-start; /* Или center, если хочешь по центру */
    margin: 30px 0 25px 0;
  }
  .search-bar-group {
    display: flex;
    align-items: center;
    border: 1px solid #808080;
    border-radius: 4px;
    height: 40px;
    width: 700px; /* ФИКСИРУЕМ ШИРИНУ, чтобы не был слишком длинным */
    overflow: hidden;
  }
    .shop-label {
      background: #F4F4F4;
      color: #0089d0;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 20px;
      font-weight: 700;
      font-size: 14px;
      border-right: 1px solid #e0e0e0;
    }
    .search-field { flex: 1; border: none; padding: 0 15px; font-size: 16px; outline: none; color: #333; }
    .search-btn {
      background: #0089d0;
      border: none;
      width: 60px;
      height: 100%;
      color: #fff;
      cursor: pointer;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .my-city-inline { display: flex; flex-direction: column; min-width: 100px; }
    .city-label { font-size: 14px; color: #000; }
    .city-name { font-size: 14px; color: #0089d0; border-bottom: 1px dashed #0089d0; cursor: pointer; width: fit-content; }

    /* Синие ссылки категорий */
    .sub-nav-categories {
      display: flex;
      justify-content: space-between;
      padding-bottom: 15px;
      gap: 10px;
    }
    .cat-item {
      font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
      text-decoration: none;
      color: #0089d0;
      font-size: 14px;
      font-weight: 500;
      white-space: wrap;
      letter-spacing: 0px;
    }
    
    .cat-item:hover:not(.active) { color: #f44336; }
  `]
})

export class HeaderComponent {
  constructor(private productService: ProductService) {}

  get favoriteCount(): number {
    return this.productService.getProducts().filter(p => p.isFavorite).length;
  }

  get cartCount(): number {
    return this.productService.getProducts().filter(p => p.isInCart).length;
  }
  showCart() {
    console.log('Переключаю на корзину');
    this.productService.setMode('cart');
  }

  // Метод для показа только избранного
  showFavorites() {
    this.productService.setMode('favorite');
  }

  // Метод для возврата ко всем товарам (при клике на лого)
  showAll() {
    this.productService.setMode('all');
  }
}