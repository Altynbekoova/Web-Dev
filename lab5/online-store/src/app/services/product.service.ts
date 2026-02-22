import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})

export class ProductService {

  private viewMode = new BehaviorSubject<'all' | 'cart' | 'favorite'>('all');
  viewMode$ = this.viewMode.asObservable();

  

  
  private categories: Category[] = [
    { id: 0, name: 'Все товары' },
    { id: 1, name: 'Смартфоны' },
    { id: 2, name: 'Ноутбуки' },
    { id: 3, name: 'Наушники' },
    { id: 4, name: 'Смарт-часы' },
    { id: 5, name: 'Планшеты' },
  ];

  private products: Product[] = [
    {
      id: 1,
      name: 'Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Смартфон Apple iPhone 17 Pro',
      price: 789096,
      rating: 4.5,
      reviews: 993,
      image: 'images/iphone17(1).jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 32879,
      installmentMonths: 24,
      discount: 3,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 2,
      name: 'Apple iPhone 15 128Gb черный',
      description: 'Смартфон Apple iPhone 15',
      price: 397000,
      rating: 4.5,
      reviews: 4440,
      image: 'images/iphone15.jpg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 16542,
      installmentMonths: 24,
      discount: 3,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 3,
      name: 'Apple iPhone 13 128Gb черный',
      description: 'Смартфон Apple iPhone 13',
      price: 307232,
      rating: 4.5,
      reviews: 7967,
      image: 'images/iphone13.jpg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 12802,
      installmentMonths: 24,
      discount: 3,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 4,
      name: 'Apple iPhone 17 Pro Max 256Gb оранжевый',
      description: 'Смартфон Apple iPhone 17 Pro Max',
      price: 810416,
      rating: 4.5,
      reviews: 825,
      image: 'images/iphone17(4).jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 33768,
      installmentMonths: 24,
      discount: 3,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 5,
      name: 'Apple iPhone 17 Pro 256Gb темно-синий',
      description: 'Смартфон Apple iPhone 17 Pro',
      price: 789283,
      rating: 4.5,
      reviews: 945,
      image: 'images/iphone17(5).jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 32887,
      installmentMonths: 24,
      discount: 3,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    // Samsung
    {
      id: 21,
      name: 'Samsung Galaxy S24 Ultra 256Gb серый',
      description: 'Флагманский смартфон Samsung',
      price: 589000,
      rating: 4.8,
      reviews: 1250,
      image: 'images/samsung galaxy a24.jpeg',
      link: '#',
      brand: 'Samsung',
      monthlyPayment: 24542,
      installmentMonths: 24,
      discount: 5,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 22,
      name: 'Samsung Galaxy S23 128Gb зеленый',
      description: 'Смартфон Samsung Galaxy S23',
      price: 399000,
      rating: 4.7,
      reviews: 890,
      image: 'images/SamsungGalaxyS23128Gbзеленый.jpg',
      link: '#',
      brand: 'Samsung',
      monthlyPayment: 16625,
      installmentMonths: 24,
      discount: 5,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 23,
      name: 'Samsung Galaxy A55 8Gb/256Gb черный',
      description: 'Смартфон Samsung Galaxy A55',
      price: 169990,
      rating: 4.6,
      reviews: 2340,
      image: 'images/samsung a55.jpeg',
      link: '#',
      brand: 'Samsung',
      monthlyPayment: 7083,
      installmentMonths: 24,
      discount: 5,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 24,
      name: 'Samsung Galaxy Z Fold 5 512Gb бежевый',
      description: 'Складной смартфон Samsung',
      price: 799000,
      rating: 4.7,
      reviews: 560,
      image: 'images/SamsungGalaxyZFold5512Gbбежевый.avif',
      link: '#',
      brand: 'Samsung',
      monthlyPayment: 33292,
      installmentMonths: 24,
      discount: 7,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 25,
      name: 'Samsung Galaxy A15 128Gb синий',
      description: 'Бюджетный смартфон Samsung',
      price: 89990,
      rating: 4.5,
      reviews: 3450,
      image: 'images/SamsungGalaxyA15128Gbсиний.jpeg',
      link: '#',
      brand: 'Samsung',
      monthlyPayment: 3750,
      installmentMonths: 24,
      discount: 5,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    // Xiaomi
    {
      id: 26,
      name: 'Xiaomi 14 Ultra 16Gb/512Gb черный',
      description: 'Флагманский смартфон Xiaomi',
      price: 599990,
      rating: 4.7,
      reviews: 890,
      image: 'images/Xiaomi14Ultra16Gb.jpeg',
      link: '#',
      brand: 'Xiaomi',
      monthlyPayment: 24999,
      installmentMonths: 24,
      discount: 7,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 27,
      name: 'Xiaomi Redmi Note 13 Pro 8Gb/256Gb черный',
      description: 'Смартфон Xiaomi Redmi Note 13 Pro',
      price: 159990,
      rating: 4.6,
      reviews: 2150,
      image: 'images/XiaomiRedmiNote13Pro.jpeg',
      link: '#',
      brand: 'Xiaomi',
      monthlyPayment: 6666,
      installmentMonths: 24,
      discount: 5,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 28,
      name: 'Poco X6 Pro 12Gb/512Gb черный',
      description: 'Смартфон Poco X6 Pro',
      price: 179990,
      rating: 4.7,
      reviews: 1230,
      image: 'images/PocoX6Pro12Gb.jpeg',
      link: '#',
      brand: 'Poco',
      monthlyPayment: 7499,
      installmentMonths: 24,
      discount: 7,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 29,
      name: 'Xiaomi 13T Pro 12Gb/512Gb черный',
      description: 'Смартфон Xiaomi 13T Pro',
      price: 349990,
      rating: 4.7,
      reviews: 670,
      image: 'images/Xiaomi13TPro12Gb.jpeg',
      link: '#',
      brand: 'Xiaomi',
      monthlyPayment: 14583,
      installmentMonths: 24,
      discount: 5,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 30,
      name: 'Poco F6 12Gb/512Gb желтый',
      description: 'Смартфон Poco F6',
      price: 199990,
      rating: 4.6,
      reviews: 430,
      image: 'images/PocoF612Gb.jpeg',
      link: '#',
      brand: 'Poco',
      monthlyPayment: 8333,
      installmentMonths: 24,
      discount: 5,
      categoryId: 1,
      isFavorite: false,
      isInCart: false
    },

    {
      id: 31,
      name: 'Apple Watch Series 9 45mm черный',
      description: 'Умные часы Apple',
      price: 199000,
      rating: 4.8,
      reviews: 3450,
      image: 'images/AppleWatchSeries9.jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 8292,
      installmentMonths: 24,
      discount: 5,
      categoryId: 4,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 32,
      name: 'Apple Watch Ultra 2 49mm оранжевый',
      description: 'Премиальные умные часы Apple',
      price: 349000,
      rating: 4.9,
      reviews: 890,
      image: 'images/AppleWatchUltra2.jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 14542,
      installmentMonths: 24,
      discount: 7,
      categoryId: 4,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 33,
      name: 'Samsung Galaxy Watch 6 44mm черный',
      description: 'Умные часы Samsung',
      price: 129990,
      rating: 4.7,
      reviews: 2340,
      image: 'images/SamsungGalaxyWatch6.jpeg',
      link: '#',
      brand: 'Samsung',
      monthlyPayment: 5416,
      installmentMonths: 24,
      discount: 5,
      categoryId: 4,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 34,
      name: 'Samsung Galaxy Watch 6 Classic 47mm серебро',
      description: 'Классические умные часы Samsung',
      price: 179990,
      rating: 4.7,
      reviews: 1230,
      image: 'images/последниечасы.jpeg',
      link: '#',
      brand: 'Samsung',
      monthlyPayment: 7499,
      installmentMonths: 24,
      discount: 5,
      categoryId: 4,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 35,
      name: 'Xiaomi Watch S3 46mm черный',
      description: 'Умные часы Xiaomi',
      price: 29990,
      rating: 4.6,
      reviews: 5670,
      image: 'images/XiaomiWatchS3.jpeg',
      link: '#',
      brand: 'Xiaomi',
      monthlyPayment: 1249,
      installmentMonths: 24,
      discount: 7,
      categoryId: 4,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 36,
      name: 'Xiaomi Redmi Watch 4 черный',
      description: 'Бюджетные умные часы Xiaomi',
      price: 19990,
      rating: 4.5,
      reviews: 8900,
      image: 'images/XiaomiRedmiWatch4.jpeg',
      link: '#',
      brand: 'Xiaomi',
      monthlyPayment: 833,
      installmentMonths: 24,
      discount: 5,
      categoryId: 4,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 37,
      name: 'Huawei Watch GT 4 46mm черный',
      description: 'Умные часы Huawei',
      price: 49990,
      rating: 4.7,
      reviews: 1560,
      image: 'images/HuaweiWatchGT4.jpeg',
      link: '#',
      brand: 'Huawei',
      monthlyPayment: 2083,
      installmentMonths: 24,
      discount: 5,
      categoryId: 4,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 38,
      name: 'Amazfit GTR 4 47mm черный',
      description: 'Умные часы Amazfit',
      price: 39990,
      rating: 4.6,
      reviews: 2340,
      image: 'images/AmazfitGTR4.jpeg',
      link: '#',
      brand: 'Amazfit',
      monthlyPayment: 1666,
      installmentMonths: 24,
      discount: 7,
      categoryId: 4,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 39,
      name: 'Garmin Fenix 7 черный',
      description: 'Спортивные часы Garmin',
      price: 299000,
      rating: 4.8,
      reviews: 430,
      image: 'images/GarminFenix7.jpeg',
      link: '#',
      brand: 'Garmin',
      monthlyPayment: 12458,
      installmentMonths: 24,
      discount: 5,
      categoryId: 4,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 40,
      name: 'Polar Pacer Pro черный',
      description: 'Спортивные часы Polar',
      price: 89990,
      rating: 4.6,
      reviews: 230,
      image: 'images/PolarPacerPro.jpeg',
      link: '#',
      brand: 'Polar',
      monthlyPayment: 3749,
      installmentMonths: 24,
      discount: 3,
      categoryId: 4,
      isFavorite: false,
      isInCart: false
    },

    {
      id: 6,
      name: 'Apple MacBook Air 13 M1 256Gb',
      description: 'Ноутбук Apple MacBook Air',
      price: 449000,
      rating: 4.8,
      reviews: 2340,
      image: 'images/MacBookAir13.jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 18708,
      installmentMonths: 24,
      discount: 3,
      categoryId: 2,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 7,
      name: 'ASUS ROG Strix G15',
      description: 'Игровой ноутбук ASUS',
      price: 699000,
      rating: 4.7,
      reviews: 890,
      image: 'images/ASUSROG.jpeg',
      link: '#',
      brand: 'ASUS',
      monthlyPayment: 29125,
      installmentMonths: 24,
      discount: 5,
      categoryId: 2,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 8,
      name: 'Lenovo Legion 5',
      description: 'Игровой ноутбук Lenovo',
      price: 599000,
      rating: 4.7,
      reviews: 670,
      image: 'images/LenovoLegion.jpeg',
      link: '#',
      brand: 'Lenovo',
      monthlyPayment: 24958,
      installmentMonths: 24,
      discount: 5,
      categoryId: 2,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 9,
      name: 'HP Pavilion 15',
      description: 'Ноутбук HP',
      price: 349000,
      rating: 4.6,
      reviews: 430,
      image: 'images/HPPavilion.jpeg',
      link: '#',
      brand: 'HP',
      monthlyPayment: 14542,
      installmentMonths: 24,
      discount: 3,
      categoryId: 2,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 10,
      name: 'Acer Aspire 7',
      description: 'Ноутбук Acer',
      price: 399000,
      rating: 4.6,
      reviews: 520,
      image: 'images/AcerAspire.jpeg',
      link: '#',
      brand: 'Acer',
      monthlyPayment: 16625,
      installmentMonths: 24,
      discount: 5,
      categoryId: 2,
      isFavorite: false,
      isInCart: false
    },

    {
      id: 11,
      name: 'Apple AirPods Pro 2',
      description: 'Беспроводные наушники Apple',
      price: 119000,
      rating: 4.9,
      reviews: 5670,
      image: 'images/AirPodsPro2.jpg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 4958,
      installmentMonths: 24,
      discount: 5,
      categoryId: 3,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 12,
      name: 'Samsung Galaxy Buds2 Pro',
      description: 'Наушники Samsung',
      price: 69900,
      rating: 4.8,
      reviews: 2340,
      image: 'images/GalaxyBuds3.jpeg',
      link: '#',
      brand: 'Samsung',
      monthlyPayment: 2912,
      installmentMonths: 24,
      discount: 7,
      categoryId: 3,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 13,
      name: 'JBL Tune 510BT',
      description: 'Наушники JBL',
      price: 29900,
      rating: 4.7,
      reviews: 8900,
      image: 'images/JBL.jpg',
      link: '#',
      brand: 'JBL',
      monthlyPayment: 1246,
      installmentMonths: 24,
      discount: 5,
      categoryId: 3,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 14,
      name: 'Sony WH-1000XM5',
      description: 'Премиум наушники Sony',
      price: 149000,
      rating: 4.9,
      reviews: 1230,
      image: 'images/SonyWH.jpg',
      link: '#',
      brand: 'Sony',
      monthlyPayment: 6208,
      installmentMonths: 24,
      discount: 7,
      categoryId: 3,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 15,
      name: 'Xiaomi Redmi Buds 4 Pro',
      description: 'Наушники Xiaomi',
      price: 19900,
      rating: 4.6,
      reviews: 3450,
      image: 'images/XiaomiRedmiBuds4Pro.jpg',
      link: '#',
      brand: 'Xiaomi',
      monthlyPayment: 829,
      installmentMonths: 24,
      discount: 5,
      categoryId: 3,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 16,
      name: 'Apple iPad Pro 11 2022',
      description: 'Планшет Apple iPad Pro',
      price: 499000,
      rating: 4.9,
      reviews: 890,
      image: 'images/iPadPro11.jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 20792,
      installmentMonths: 24,
      discount: 5,
      categoryId: 5,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 17,
      name: 'Apple iPad Air 5',
      description: 'Планшет Apple iPad Air',
      price: 349000,
      rating: 4.8,
      reviews: 670,
      image: 'images/iPadAir5.jpeg',
      link: '#',
      brand: 'Apple',
      monthlyPayment: 14542,
      installmentMonths: 24,
      discount: 3,
      categoryId: 5,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 18,
      name: 'Samsung Galaxy Tab S9',
      description: 'Планшет Samsung',
      price: 399000,
      rating: 4.8,
      reviews: 430,
      image: 'images/GalaxyTabS9.jpeg',
      link: '#',
      brand: 'Samsung',
      monthlyPayment: 16625,
      installmentMonths: 24,
      discount: 5,
      categoryId: 5,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 19,
      name: 'Xiaomi Pad 6',
      description: 'Планшет Xiaomi',
      price: 199000,
      rating: 4.7,
      reviews: 1230,
      image: 'images/XiaomiPad6.jpeg',
      link: '#',
      brand: 'Xiaomi',
      monthlyPayment: 8292,
      installmentMonths: 24,
      discount: 7,
      categoryId: 5,
      isFavorite: false,
      isInCart: false
    },
    {
      id: 20,
      name: 'Lenovo Tab P11',
      description: 'Планшет Lenovo',
      price: 149000,
      rating: 4.6,
      reviews: 560,
      image: 'images/LenovoTabP11.jpeg',
      link: '#',
      brand: 'Lenovo',
      monthlyPayment: 6208,
      installmentMonths: 24,
      discount: 5,
      categoryId: 5,
      isFavorite: false,
      isInCart: false
    }
  ];
  private productsSubject = new BehaviorSubject<Product[]>(this.products);
  products$ = this.productsSubject.asObservable();

  getViewModeValue() {
    return this.viewMode.value;
  }

  setMode(mode: 'all' | 'cart' | 'favorite') {
    this.viewMode.next(mode);
  }

  toggleCart(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.isInCart = !product.isInCart;
      this.productsSubject.next([...this.products]);
    }
  }

  toggleFavorite(productId: number) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.isFavorite = !product.isFavorite;
      this.productsSubject.next([...this.products]);
    }
  }

  getCategories(): Category[] {
    return this.categories;
  }

  getProducts(): Product[] {
    return this.products;
  }

  getProductsByCategory(categoryId: number): Product[] {
    if (categoryId === 0) return this.products;
    return this.products.filter(p => p.categoryId === categoryId);
  }
  filterByCategory(categoryId: number) {
    if (categoryId === 0) {
      this.productsSubject.next(this.products);
    } else {
      const filtered = this.products.filter(p => p.categoryId === categoryId);
      this.productsSubject.next(filtered);
    }
  }
  filterByBrand(categoryId: number, brand: string | null) {
    let filtered = categoryId === 0 
      ? this.products 
      : this.products.filter(p => p.categoryId === categoryId);
    
    if (brand) {
      filtered = filtered.filter(p => p.brand === brand);
    }
    
    this.productsSubject.next(filtered);
  }
}