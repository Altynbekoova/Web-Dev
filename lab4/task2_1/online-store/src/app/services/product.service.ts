import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb оранжевый',
      price: 789096,
      rating: 4.5,
      reviews: 993,
      image: 'images/iphone17(1).jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 32879,
      installmentMonths: 24,
      discount: 3
    },
    {
      id: 2,
      name: 'Apple iPhone 15 128Gb черный',
      price: 397000,
      rating: 4.5,
      reviews: 4440,
      image: 'images/iphone15.jpg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 16542,
      installmentMonths: 24,
      discount: 3
    },
    {
      id: 3,
      name: 'Apple iPhone 13 128Gb черный',
      price: 307232,
      rating: 4.5,
      reviews: 7967,
      image: 'assets/images/iphone13.jpg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 12802,
      installmentMonths: 24,
      discount: 3
    },
    {
      id: 4,
      name: 'Apple iPhone 17 Pro Max 256Gb оранжевый',
      price: 810416,
      rating: 4.5,
      reviews: 825,
      image: 'assets/images/iphone17(4).jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 33768,
      installmentMonths: 24,
      discount: 3
    },
    {
      id: 5,
      name: 'Apple iPhone 17 Pro 256Gb темно-синий',
      price: 789283,
      rating: 4.5,
      reviews: 945,
      image: 'assets/images/iphone17(5).jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 32887,
      installmentMonths: 24,
      discount: 3
    },
    {
      id: 6,
      name: 'Samsung Galaxy A07 6 ГБ/128 ГБ черный',
      price: 68665,
      rating: 4.5,
      reviews: 1036,
      image: 'assets/images/samsung-a07.jpg',
      link: '#',
      brand: 'Samsung',
      monthlyPayment: 5723,
      installmentMonths: 12,
      discount: 0
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
