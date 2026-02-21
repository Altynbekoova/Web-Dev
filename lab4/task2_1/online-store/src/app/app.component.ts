import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, SidebarComponent, ProductListComponent],
  template: `
    <app-header></app-header>
    <div class="main-container">
      <aside class="sidebar-section">
        <app-sidebar></app-sidebar>
      </aside>
      <main class="content-section">
        <app-product-list></app-product-list>
      </main>
    </div>
  `,
  styles: [`
    .main-container {
      max-width: 1200px;
      margin: 20px auto;
      padding: 0 20px;
      display: grid;
      grid-template-columns: 260px 1fr;
      gap: 20px;
    }
    
    @media (max-width: 768px) {
      .main-container {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class AppComponent {}
