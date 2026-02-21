import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="star-rating">
      @for (star of stars; track star) {
        <span class="star">
          @if (star <= fullStars) {
            <i class="star-icon filled">★</i>
          } @else if (star === fullStars + 0.5 && hasHalfStar) {
            <i class="star-icon half">★</i>
          } @else {
            <i class="star-icon empty">★</i>
          }
        </span>
      }
      <span class="rating-value">{{ rating.toFixed(1) }}</span>
    </div>
  `,
  styles: [`
    .star-rating {
      display: flex;
      align-items: center;
      gap: 2px;
    }
    .star-icon {
      font-size: 18px;
      font-style: normal;
    }
    .star-icon.filled {
      color: #f5a623;
    }
    .star-icon.half {
      color: #f5a623;
      position: relative;
      display: inline-block;
      width: 18px;
      overflow: hidden;
    }
    .star-icon.empty {
      color: #e0e0e0;
    }
    .rating-value {
      margin-left: 4px;
      font-size: 14px;
      color: #666;
      font-weight: 500;
    }
  `]
})
export class StarRatingComponent {
  @Input() rating: number = 0;
  
  stars = [1, 2, 3, 4, 5];
  
  get fullStars(): number {
    return Math.floor(this.rating);
  }
  
  get hasHalfStar(): boolean {
    return this.rating % 1 >= 0.5;
  }
}
