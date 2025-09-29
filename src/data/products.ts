import { Product } from '../types/product';

export const products: Product[] = [
  {
    id: '1',
    name: 'Patanjali Honey',
    price: 180,
    originalPrice: 220,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRQIZJypgn44CfOkarToX3iIvauuS0CQEABV0CPTIgHFAeVvzJMyNe--jx63X5P4MBCCwdeqz1FTVpQOvsNUDgOmUGbeizKwXjZqc5Q9i6FRHgpSJIs9VEH',
    images: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSBgLJcZVNEMp-6PIopurLj2yVic-MtRW12bsC2BeEMusGNb7GsAM2NQjsFY7GWwx1iALX53GYH1XsL6FuTyN9weN8pRjQo_KcBpH_fYipFfHFbUVlJdbkSlko',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTepRbXX2Y2ZR-yfyDfTaLnDdhQD_IHWy-i7PQ3u_pumDyBlMMFk-OEEdvRX5Vt5XP8p6DAwCPuHi2IwziPfREWG9bSfN5i3JoB2SXK5oyU-nKdACv8lSWb0w',
    ],
    categoryId: 'natural-health-care',
    category: 'Natural Health Care',
    subcategoryId: 'honey',
    subcategory: 'Honey',
    description: '100% Pure and Natural Honey sourced from pristine locations. Rich in antioxidants and natural enzymes.',
    shortDescription: 'Pure and natural honey for daily wellness',
    benefits: ['Natural energy booster', 'Rich in antioxidants', 'Supports immune system', 'Pure and unprocessed'],
    ingredients: ['Pure Honey'],
    inStock: true,
    rating: 4.5,
    reviews: 248,
    featured: true,
    isBestseller: true,
    discount: 18,
    tags: ['organic', 'pure', 'natural'],
    weight: '500g',
    usage: 'Take 1-2 teaspoons daily with warm water or milk',
    certifications: ['FSSAI Certified', 'Organic Certified']
  },
  {
    id: '2',
    name: 'Chyawanprash Special',
    price: 285,
    originalPrice: 350,
    image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7pbOXfTEvHeEZG7LGAdML2qGZ0bUCFEbanvQMn-vvi9UVzctUJfUvF2dd-J4gvxthY0TAN3cHFeE5ndfFY2YXFfdC6FZ-akVP4gGLdvJW1PQKu289Zf7BaA',
    images: [
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7pbOXfTEvHeEZG7LGAdML2qGZ0bUCFEbanvQMn-vvi9UVzctUJfUvF2dd-J4gvxthY0TAN3cHFeE5ndfFY2YXFfdC6FZ-akVP4gGLdvJW1PQKu289Zf7BaA',
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT7pbOXfTEvHeEZG7LGAdML2qGZ0bUCFEbanvQMn-vvi9UVzctUJfUvF2dd-J4gvxthY0TAN3cHFeE5ndfFY2YXFfdC6FZ-akVP4gGLdvJW1PQKu289Zf7BaA',
    ],
    categoryId: 'natural-health-care',
    category: 'Natural Health Care',
    subcategoryId: 'chyawanprash',
    subcategory: 'Chyawanprash',
    description: 'Traditional Ayurvedic immunity booster made with 45+ herbs and natural ingredients.',
    shortDescription: 'Ayurvedic immunity booster with 45+ herbs',
    benefits: ['Boosts immunity', 'Improves digestion', 'Enhances energy', 'Rich in Vitamin C'],
    ingredients: ['Amla', 'Ashwagandha', 'Giloy', 'Brahmi', '40+ other herbs'],
    inStock: true,
    rating: 4.7,
    reviews: 492,
    featured: true,
    isBestseller: true,
    discount: 19,
    tags: ['ayurvedic', 'immunity', 'herbs'],
    weight: '1kg',
    usage: 'Take 1-2 teaspoons twice daily with warm milk',
    warnings: ['Consult doctor if diabetic'],
    certifications: ['Ayush Certified', 'GMP Certified']
  },
  {
    id: '3',
    name: 'Neem-Haldi Soap',
    price: 25,
    image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSXMX1dpEYwxreaLau29VcVNGtPCyp7dnZWTuW8Nh5aZ3yWccgpaqrcC7P2YZHrZXpQweuJaDf2bSmPUmgd8KNOInOA50gygRyic6ZyhY5IJCOE-2_uMyqh7w',
    images: [
      'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQEhMHCFBYYAWhpExi7twhKDBTPQ2t3pY-F5ZWZHZD7BSdO5-Pp6ryeeUBtFxWK16Qbc7in3ZBDosdAsHIzYT2dW-Hh02b6rn9eBvvEAHtGOJS2V4KfeNod8w',
      'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRjRrtAeW-80ISwE2na4OJRySLTFbAhAHRgjjYr07b8mS3xw5p7T-vw6BqewCsVz026sAfGxTqNKT4vJXh-d8spq4Idb9K360bDh1b1xwkl6xuZtWPLHvlnpYz_',
    ],
    categoryId: 'natural-personal-care',
    category: 'Natural Personal Care',
    subcategoryId: 'skin-care',
    subcategory: 'Skin Care',
    description: 'Natural antibacterial soap with Neem and Turmeric for healthy and glowing skin.',
    shortDescription: 'Antibacterial soap with Neem and Turmeric',
    benefits: ['Antibacterial properties', 'Natural skin cleanser', 'Prevents acne', 'Suitable for all skin types'],
    ingredients: ['Neem Extract', 'Haldi (Turmeric)', 'Coconut Oil', 'Natural Glycerin'],
    inStock: true,
    rating: 4.3,
    reviews: 156,
    featured: true,
    tags: ['natural', 'antibacterial', 'herbal'],
    weight: '75g',
    usage: 'Apply on wet skin, lather and rinse with water',
    certifications: ['Dermatologically Tested']
  },
  {
    id: '4',
    name: 'Aloe Vera Face Wash',
    price: 85,
    originalPrice: 100,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8bJcy98wxNeQIwW_sbop_lWKFTKGp-sB4EVe6IIHkI5T-ePMGyP0oy0oToWx-FVO30BViboZX2Rjs_Tw29xIbK5L-nK5GqzzchfSFmFN5IQsgjtKRYqlMHUo',
    images: [
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8bJcy98wxNeQIwW_sbop_lWKFTKGp-sB4EVe6IIHkI5T-ePMGyP0oy0oToWx-FVO30BViboZX2Rjs_Tw29xIbK5L-nK5GqzzchfSFmFN5IQsgjtKRYqlMHUo',
      'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQ8bJcy98wxNeQIwW_sbop_lWKFTKGp-sB4EVe6IIHkI5T-ePMGyP0oy0oToWx-FVO30BViboZX2Rjs_Tw29xIbK5L-nK5GqzzchfSFmFN5IQsgjtKRYqlMHUo',
    ],
    categoryId: 'natural-personal-care',
    category: 'Natural Personal Care',
    subcategoryId: 'skin-care',
    subcategory: 'Skin Care',
    description: 'Gentle face wash with Aloe Vera that cleanses and moisturizes your skin naturally.',
    shortDescription: 'Gentle Aloe Vera face wash for all skin types',
    benefits: ['Deep cleansing', 'Moisturizes skin', 'Reduces inflammation', 'Natural and gentle'],
    ingredients: ['Aloe Vera Extract', 'Rose Water', 'Cucumber', 'Natural Cleansers'],
    inStock: true,
    rating: 4.4,
    reviews: 324,
    featured: true,
    discount: 15,
    tags: ['aloe-vera', 'gentle', 'moisturizing'],
    weight: '100ml',
    usage: 'Apply on damp face, massage gently and rinse',
    certifications: ['Dermatologically Tested', 'Paraben Free']
  },
  {
    id: '5',
    name: 'Amla Juice',
    price: 120,
    image: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSoFF_4Lm8LeuzcGVbuctxJMw-K7wzoc9P-CpUPVQyou9dPaFsD_kBd0TX8vd7IjPqG6sd5ZJjxI9_kaL5cFAHhXa1ZBTKc5L-46IAFRt7AUmclyS6nEH5r0Xg',
    images: [
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTC8LLcwPenGUhYyk_DVfMO0Iw9NcUKFSSJjXuakMwPa2XrkqRfR1xiYmEBHohRuFzBYh0AqxiG-Sgh-qQ5yZopD3lKgj1ODZW4qWTGsIg',
      'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTC8LLcwPenGUhYyk_DVfMO0Iw9NcUKFSSJjXuakMwPa2XrkqRfR1xiYmEBHohRuFzBYh0AqxiG-Sgh-qQ5yZopD3lKgj1ODZW4qWTGsIg',
    ],
    categoryId: 'natural-health-care',
    category: 'Natural Health Care',
    subcategoryId: 'health-drinks',
    subcategory: 'Health Drinks',
    description: 'Fresh Amla juice packed with Vitamin C and natural antioxidants for overall health.',
    shortDescription: 'Fresh Amla juice rich in Vitamin C',
    benefits: ['Rich in Vitamin C', 'Boosts immunity', 'Improves digestion', 'Natural detoxifier'],
    ingredients: ['Fresh Amla Extract', 'Natural Preservatives'],
    inStock: true,
    rating: 4.2,
    reviews: 89,
    isNew: true,
    tags: ['vitamin-c', 'antioxidants', 'juice'],
    weight: '500ml',
    usage: 'Dilute with water and drink on empty stomach',
    warnings: ['Store in refrigerator after opening'],
    certifications: ['FSSAI Certified']
  },
  {
    id: '6',
    name: 'Divya Mukta Vati',
    price: 240,
    image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1733978962MuktaVatiExtraPower120g1.png',
    images: [
      'https://www.patanjaliayurved.net/assets/product_images/400x500/1733978962MuktaVatiExtraPower120g1.png',
      'https://www.patanjaliayurved.net/assets/product_images/400x500/1733978962MuktaVatiExtraPower120g1.png',
    ],
    categoryId: 'ayurvedic-medicine',
    category: 'Ayurvedic Medicine',
    subcategoryId: 'vati',
    subcategory: 'Vati',
    description: 'Ayurvedic medicine for blood pressure management and cardiovascular health.',
    shortDescription: 'Ayurvedic medicine for BP management',
    benefits: ['Supports heart health', 'Helps manage BP', 'Natural ingredients', 'No side effects'],
    ingredients: ['Arjuna', 'Punarnava', 'Jatamansi', 'Shankhpushpi'],
    inStock: true,
    rating: 4.6,
    reviews: 67,
    tags: ['ayurvedic', 'bp-control', 'heart-health'],
    weight: '120 tablets',
    usage: 'Take 2 tablets twice daily with water',
    warnings: ['Consult doctor before use', 'Not for pregnant women'],
    certifications: ['Ayush Certified']
  },
  {
    id: '7',
    name: 'Rose Soap',
    price: 30,
    image: 'https://m.media-amazon.com/images/I/51CVex7LjyL.jpg',
    images: [
      'https://m.media-amazon.com/images/I/51CVex7LjyL.jpg',
      'https://m.media-amazon.com/images/I/51CVex7LjyL.jpg',
    ],
    categoryId: 'natural-personal-care',
    category: 'Natural Personal Care',
    subcategoryId: 'skin-care',
    subcategory: 'Skin Care',
    description: 'Luxurious rose soap that nourishes and perfumes your skin with natural rose extracts.',
    shortDescription: 'Luxurious rose soap for soft skin',
    benefits: ['Moisturizes skin', 'Natural fragrance', 'Anti-aging properties', 'Gentle on skin'],
    ingredients: ['Rose Extract', 'Almond Oil', 'Coconut Oil', 'Natural Glycerin'],
    inStock: true,
    rating: 4.1,
    reviews: 203,
    tags: ['rose', 'luxury', 'fragrant'],
    weight: '75g',
    usage: 'Apply on wet skin, lather and rinse',
    certifications: ['Natural Ingredients']
  },
  {
    id: '8',
    name: 'Tulsi Drops',
    price: 65,
    image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1689075147shilatulsidrop30ml1.png',
    images: [
      'https://www.patanjaliayurved.net/assets/product_images/400x500/1689075147shilatulsidrop30ml1.png',
      'https://www.patanjaliayurved.net/assets/product_images/400x500/1689075147shilatulsidrop30ml1.png',
    ],
    categoryId: 'natural-health-care',
    category: 'Natural Health Care',
    subcategoryId: 'health-wellness',
    subcategory: 'Health and Wellness',
    description: 'Pure Tulsi extract drops for respiratory health and immunity boost.',
    shortDescription: 'Pure Tulsi extract for respiratory health',
    benefits: ['Boosts immunity', 'Supports respiratory health', 'Natural antioxidant', 'Anti-stress properties'],
    ingredients: ['Tulsi Extract', 'Natural Preservatives'],
    inStock: true,
    rating: 4.5,
    reviews: 134,
    isNew: true,
    tags: ['tulsi', 'respiratory', 'immunity'],
    weight: '30ml',
    usage: '5-10 drops in warm water, twice daily',
    certifications: ['Pure Extracts', 'No Chemicals']
  },
  {
    id: '9',
    name: 'Coconut Oil',
    price: 150,
    originalPrice: 180,
    image: 'https://m.media-amazon.com/images/I/51TdM7Z6EQS._UF1000,1000_QL80_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/51TdM7Z6EQS._UF1000,1000_QL80_.jpg',
      'https://m.media-amazon.com/images/I/51TdM7Z6EQS._UF1000,1000_QL80_.jpg',
    ],
    categoryId: 'natural-personal-care',
    category: 'Natural Personal Care',
    subcategoryId: 'hair-care',
    subcategory: 'Hair Care',
    description: 'Pure coconut oil for hair nourishment and skin moisturizing.',
    shortDescription: 'Pure coconut oil for hair and skin',
    benefits: ['Nourishes hair', 'Moisturizes skin', 'Natural shine', 'Prevents dandruff'],
    ingredients: ['100% Pure Coconut Oil'],
    inStock: true,
    rating: 4.6,
    reviews: 287,
    featured: true,
    discount: 17,
    tags: ['coconut', 'hair-care', 'natural'],
    weight: '200ml',
    usage: 'Apply on hair and scalp, massage gently',
    certifications: ['Cold Pressed', 'Pure & Natural']
  },
  {
    id: '10',
    name: 'Arjuna Capsules',
    price: 295,
    image: 'https://www.patanjaliayurved.net/assets/product_images/400x500/1721648852ArjunGhanvati60N1.png',
    images: [
      'https://www.patanjaliayurved.net/assets/product_images/400x500/1721648852ArjunGhanvati60N1.png',
      'https://www.patanjaliayurved.net/assets/product_images/400x500/1721648852ArjunGhanvati60N1.png',
    ],
    categoryId: 'ayurvedic-medicine',
    category: 'Ayurvedic Medicine',
    subcategoryId: 'vati',
    subcategory: 'Vati',
    description: 'Arjuna capsules for heart health and cardiovascular support.',
    shortDescription: 'Arjuna capsules for heart health',
    benefits: ['Supports heart health', 'Improves circulation', 'Natural cardiotonic', 'Reduces cholesterol'],
    ingredients: ['Arjuna Bark Extract', 'Natural Capsule Shell'],
    inStock: true,
    rating: 4.4,
    reviews: 92,
    tags: ['arjuna', 'heart-health', 'capsules'],
    weight: '60 capsules',
    usage: '1-2 capsules twice daily after meals',
    warnings: ['Consult doctor if on heart medication'],
    certifications: ['Ayush Certified', 'Lab Tested']
  }
];

// Utility functions for product filtering and sorting
export const getProductsByCategory = (categoryId: string): Product[] => {
  if (categoryId === 'all') return products;
  return products.filter(product => product.categoryId === categoryId || product.subcategoryId === categoryId);
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getBestsellerProducts = (): Product[] => {
  return products.filter(product => product.isBestseller);
};

export const searchProducts = (query: string): Product[] => {
  const searchTerm = query.toLowerCase();
  return products.filter(product =>
    product.name.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.category.toLowerCase().includes(searchTerm) ||
    product.tags?.some(tag => tag.toLowerCase().includes(searchTerm))
  );
};

export const sortProducts = (products: Product[], sortBy: 'name' | 'price' | 'rating' | 'reviews', order: 'asc' | 'desc' = 'asc'): Product[] => {
  return [...products].sort((a, b) => {
    let comparison = 0;
    
    switch (sortBy) {
      case 'name':
        comparison = a.name.localeCompare(b.name);
        break;
      case 'price':
        comparison = a.price - b.price;
        break;
      case 'rating':
        comparison = a.rating - b.rating;
        break;
      case 'reviews':
        comparison = a.reviews - b.reviews;
        break;
    }
    
    return order === 'desc' ? -comparison : comparison;
  });
};