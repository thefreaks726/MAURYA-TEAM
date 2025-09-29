export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images?: string[];
  categoryId: string;
  category: string;
  subcategoryId?: string;
  subcategory?: string;
  description: string;
  shortDescription?: string;
  benefits: string[];
  ingredients: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
  featured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  discount?: number;
  tags?: string[];
  weight?: string;
  dimensions?: string;
  usage?: string;
  warnings?: string[];
  certifications?: string[];
}

export interface ProductFilter {
  categoryId?: string;
  subcategoryId?: string;
  priceRange?: [number, number];
  rating?: number;
  inStock?: boolean;
  featured?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  searchQuery?: string;
}

export interface ProductSort {
  field: 'name' | 'price' | 'rating' | 'reviews' | 'createdAt';
  order: 'asc' | 'desc';
}