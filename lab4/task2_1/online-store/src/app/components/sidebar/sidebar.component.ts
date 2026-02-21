import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <aside class="sidebar">
      <div class="category-section">
        <div class="category-header">
          <span class="arrow">▶</span>
          <span class="category-title">Все категории (8532)</span>
        </div>
        
        <div class="subcategory">
          <span class="arrow">▶</span>
          <span>Телефоны и гаджеты (8532)</span>
        </div>
        
        <div class="subcategory sub">
          <span>Смартфоны (8532)</span>
        </div>
      </div>
      
      <div class="filter-section">
        <h3>Цена</h3>
        <ul class="filter-list">
          <li><input type="checkbox"> до 10 000 т</li>
          <li><input type="checkbox"> 10 000 - 49 999 т (65)</li>
          <li><input type="checkbox"> 50 000 - 99 999 т (1608)</li>
          <li><input type="checkbox"> 100 000 - 149 999 т (2098)</li>
          <li><input type="checkbox"> 150 000 - 199 999 т (1584)</li>
          <li><input type="checkbox"> 200 000 - 499 999 т (2381)</li>
          <li><input type="checkbox"> более 500 000 т (790)</li>
        </ul>
      </div>
      
      <div class="filter-section">
        <h3>Бренд</h3>
        <ul class="filter-list">
          <li><input type="checkbox"> Apple (456)</li>
          <li><input type="checkbox"> OPPO (307)</li>
          <li><input type="checkbox"> Poco (753)</li>
          <li><input type="checkbox"> Realme (1358)</li>
          <li><input type="checkbox"> Samsung (624)</li>
          <li><input type="checkbox"> Xiaomi (1610)</li>
        </ul>
        <a href="#" class="show-more">Показать ещё ▼</a>
      </div>
    </aside>
  `,
  styles: [`
    .sidebar {
      background: white;
      border-radius: 8px;
      padding: 16px;
    }
    
    .category-section {
      margin-bottom: 24px;
    }
    
    .category-header {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 8px 0;
      border-bottom: 1px solid #eee;
      margin-bottom: 8px;
    }
    
    .arrow {
      color: #999;
      font-size: 12px;
    }
    
    .category-title {
      font-weight: 600;
      font-size: 15px;
    }
    
    .subcategory {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 0 6px 16px;
      color: #666;
      font-size: 14px;
    }
    
    .subcategory.sub {
      padding-left: 40px;
      color: #333;
      font-weight: 500;
    }
    
    .filter-section {
      margin-bottom: 24px;
    }
    
    .filter-section h3 {
      font-size: 15px;
      font-weight: 600;
      margin-bottom: 12px;
      color: #333;
    }
    
    .filter-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }
    
    .filter-list li {
      display: flex;
      align-items: center;
      gap: 8px;
      padding: 6px 0;
      font-size: 14px;
      color: #666;
      cursor: pointer;
    }
    
    .filter-list li:hover {
      color: #f44336;
    }
    
    .filter-list input[type="checkbox"] {
      width: 16px;
      height: 16px;
      cursor: pointer;
      accent-color: #f44336;
    }
    
    .show-more {
      display: block;
      margin-top: 12px;
      font-size: 13px;
      color: #f44336;
      text-decoration: none;
    }
    
    .show-more:hover {
      text-decoration: underline;
    }
  `]
})
export class SidebarComponent {}
