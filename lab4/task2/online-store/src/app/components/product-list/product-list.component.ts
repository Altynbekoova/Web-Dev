import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Product[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 771905 ,
      rating: 4.9,
      image: 'assets/images/iphone.jpg',
      images: [
        'assets/images/iphone.jpg',
        'assets/images/iphone2.jpg',
        'assets/images/iphone3.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн. Смартфон получил динамический остров, на который выводятся уведомления и другая важная информация.',
      price: 382450 ,
      rating: 4.8,
      image: 'assets/images/s24.jpg',
      images: [
        'assets/images/s24.jpg',
        'assets/images/s242.jpg',
        'assets/images/s243.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
    {
      id: 3,
      name: 'Смартфон Apple iPhone 13 128Gb черный',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения. Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. ',
      price: 320353  ,
      rating: 4.8,
      image: 'assets/images/s24.jpg',
      images: [
        'assets/images/s24.jpg',
        'assets/images/s242.jpg',
        'assets/images/s243.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'
    },
     {
      id: 4,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb темно-синий',
      description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе передовые технологии, непревзойденную производительность и элегантный дизайн. ',
      price: 738142 ,
      rating: 4.8,
      image: 'assets/images/s24.jpg',
      images: [
        'assets/images/s24.jpg',
        'assets/images/s242.jpg',
        'assets/images/s243.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-temno-sinii-145438959/?c=750000000'
    },
     {
      id: 5,
      name: 'Смартфон Samsung Galaxy A07 6 ГБ/128 ГБ черный',
      description: 'Samsung Galaxy A07 6 ГБ/128 ГБ — это универсальный смартфон для тех, кто ценит производительность и большой объем памяти для хранения ваших данных. ',
      price: 66666  ,
      rating: 4.8,
      image: 'assets/images/s24.jpg',
      images: [
        'assets/images/s24.jpg',
        'assets/images/s242.jpg',
        'assets/images/s243.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/samsung-galaxy-a07-6-gb-128-gb-chernyi-144817763/?c=750000000'
    },
 {
      id: 6,
      name: 'Смартфон Apple iPhone 16 128Gb черный',
      description: 'Phone 16 – новый дизайн, яркие цвета, мощный процессор и свежая iOS 18 с искусственным интеллектом. Этот айфон предлагает еще больше возможностей, чем его предшественники, выводя базовую модель на другой уровень: лучше, интереснее, удобнее. Это компактный и удобный смартфон для тех, кому нужно производительное устройство в стильном корпусе без компромиссов по качеству фото или комфорту в использовании. ',
      price: 447549  ,
      rating: 4.8,
      image: 'assets/images/s24.jpg',
      images: [
        'assets/images/s24.jpg',
        'assets/images/s242.jpg',
        'assets/images/s243.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-16-128gb-chernyi-123713453/?c=750000000'
    },
     {
      id: 7,
      name: 'Смартфон Apple iPhone 13 128Gb белый',
      description: 'Apple iPhone 13 получил дисплей 6.1 дюйма Super Retina XDR, который отличается невероятно высокой плотностью пикселей — фотографии, видео и текст выглядят поразительно четко. А благодаря уменьшенной площади камеры TrueDepth на дисплее теперь больше места для изображения. Apple разработали совершенно новую схему расположения камер и развернули объективы на 45 градусов. Благодаря этому внутри корпуса поместилась лучшая система двух камер с увеличенной матрицей широкоугольной камеры. Кроме того, освободилось место для системы оптической стабилизации изображения со сдвигом матрицы, и увеличилась скорость работы матрицы на сверхширокоугольной камере. ',
      price: 349950 ,
      rating: 4.8,
      image: 'assets/images/s24.jpg',
      images: [
        'assets/images/s24.jpg',
        'assets/images/s242.jpg',
        'assets/images/s243.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-13-128gb-belyi-102298420/?c=750000000'
    },
    {
      id: 8,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb серебристый',
      description: ' Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе передовые технологии и безупречный дизайн. ',
      price: 760605  ,
      rating: 5,
      image: 'assets/images/s24.jpg',
      images: [
        'assets/images/s24.jpg',
        'assets/images/s242.jpg',
        'assets/images/s243.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-serebristyi-145467562/?c=750000000'
    },
 {
      id: 9,
      name: 'Смартфон Redmi A3x 3 ГБ/64 ГБ черный',
      description: '  Смартфон Redmi A3x 3 ГБ/64 ГБ — это мощное устройство с высокой производительностью и стильным дизайном, которое идеально подходит для повседневного использования. ',
      price: 49990 ,
      rating: 5,
      image: 'assets/images/s24.jpg',
      images: [
        'assets/images/s24.jpg',
        'assets/images/s242.jpg',
        'assets/images/s243.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a3x-3-gb-64-gb-chernyi-121654928/?c=750000000'
    },
     {
      id: 9,
      name: 'Смартфон Redmi A5 4 ГБ/128 ГБ черный',
      description: '  Смартфон Redmi A5 4 ГБ/128 ГБ — это мощное устройство с впечатляющим экраном и долговечным аккумулятором, которое идеально подходит для повседневного использования и развлечений.',
      price: 49990 ,
      rating: 5,
      image: 'assets/images/67214824.jpg',
      images: [
        'assets/images/67214824.jpg'
      ],
      link: 'https://kaspi.kz/shop/p/redmi-a5-4-gb-128-gb-chernyi-137034687/?c=750000000'
    }

  ];
}
