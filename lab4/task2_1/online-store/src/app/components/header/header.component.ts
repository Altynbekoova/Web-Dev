import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="kaspi-header">
      <div class="header-container">
        <div class="top-nav">
        <div class="logo">
        <img src="assets/images/каспи иконка.svg" alt="Kaspi.kz" class="logo-img"></div>
          <div class="nav-links">
            <a href="#">Клиентам</a>
            <a href="#">Бизнесу</a>
            <a href="#">Kaspi Гид</a>
          </div>
          <div class="city-select">Алматы</div>
        </div>
        
        <div class="search-section">
          <div class="search-bar-group">
            <div class="shop-label">Магазин</div>
            <input type="text" class="search-field" placeholder="Поиск товара">
            <button class="search-btn">🔍</button>
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
    .kaspi-header { background: #fff; border-bottom: 1px solid #e0e0e0; }
    .header-container { max-width: 1200px; margin: 0 auto; padding: 0 15px; }

    .top-nav { display: flex; align-items: center; padding: 12px 0; gap: 40px; }
    .logo-txt { font-size: 24px; font-weight: 800; color: #333; }
    .logo-txt span { color: #f44336; }
    .nav-links { display: flex; gap: 20px; }
    .nav-links a { color: #999; text-decoration: none; font-size: 14px; }
    .city-select { margin-left: auto; font-size: 14px; color: #333; cursor: pointer; }

    /* Группа поиска */
    .search-section { margin-bottom: 15px; }
    .search-bar-group {
      display: flex;
      align-items: center;
      border: 2px solid #0089d0;
      border-radius: 4px;
      height: 40px;
      overflow: hidden;
    }
    .shop-label {
      background: #f0f7ff;
      color: #0089d0;
      height: 100%;
      display: flex;
      align-items: center;
      padding: 0 15px;
      font-weight: 700;
      font-size: 14px;
      border-right: 1px solid #e0e0e0;
    }
    .search-field { flex: 1; border: none; padding: 0 12px; font-size: 15px; outline: none; }
    .search-btn {
      background: #0089d0;
      border: none;
      width: 50px;
      height: 100%;
      color: #fff;
      cursor: pointer;
      font-size: 18px;
    }

    /* Категории в ряд */
    .sub-nav-categories {
      display: flex;
      justify-content: space-between; /* Распределяет элементы в одну линию */
      padding-bottom: 10px;
      overflow-x: auto;
    }
    .cat-item {
      text-decoration: none;
      color: #0089d0;
      font-size: 11px;
      font-weight: 700;
      white-space: nowrap;
    }
    .cat-item.active { border-right: 1px solid #eee; padding-right: 10px; }
    .cat-item:hover { color: #f44336; }
  `]
})
export class HeaderComponent {}