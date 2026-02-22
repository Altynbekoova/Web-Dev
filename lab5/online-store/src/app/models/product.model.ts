export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  rating: number;
  reviews: number;
  image: string;
  link: string;
  brand: string;
  monthlyPayment: number;
  categoryId: number;
  // Добавь эти строки обязательно:
  isFavorite: boolean; 
  isInCart: boolean;
  installmentMonths?: number;
  discount?: number;
}