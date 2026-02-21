export interface Product {
    id: number;
    name: string;
    description?: string;
    price: number;
    rating: number;
    reviews: number;
    image: string;
    link: string;
    categoryId?: number;
    brand?: string;
    monthlyPayment?: number;
    installmentMonths?: number;
    discount?: number;
    likes?: number;
  }