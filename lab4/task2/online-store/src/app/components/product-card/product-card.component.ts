import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {

  @Input() product!: Product;

  currentImage!: string;

  ngOnInit() {
    this.currentImage = this.product.image;
  }

  changeImage(img: string) {
    this.currentImage = img;
  }

  getWhatsAppLink(): string {
    return `https://wa.me/?text=${encodeURIComponent(
      'Check out this product: ' + this.product.link
    )}`;
  }

  getTelegramLink(): string {
    return `https://t.me/share/url?url=${encodeURIComponent(
      this.product.link
    )}&text=${encodeURIComponent(this.product.name)}`;
  }

  stars(): number[] {
    return Array(Math.round(this.product.rating)).fill(0);
  }
}
