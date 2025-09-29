export interface Category {
  id: string;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  icon?: string;
  parentId?: string;
  subcategories?: Category[];
  featured?: boolean;
}

export const categories: Category[] = [
  {
    id: 'all',
    name: 'All Categories',
    slug: 'all-categories',
    featured: true,
    icon: '🏪',
  },
  {
    id: 'natural-health-care',
    name: 'Natural Health Care',
    slug: 'natural-health-care',
    description: 'Pure and natural health products for holistic wellness',
    icon: '🌿',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    subcategories: [
      { id: 'digestives', name: 'Digestives', slug: 'digestives', parentId: 'natural-health-care' },
      { id: 'health-wellness', name: 'Health and Wellness', slug: 'health-wellness', parentId: 'natural-health-care' },
      { id: 'chyawanprash', name: 'Chyawanprash', slug: 'chyawanprash', parentId: 'natural-health-care' },
      { id: 'badam-pak', name: 'Badam Pak', slug: 'badam-pak', parentId: 'natural-health-care' },
      { id: 'ghee', name: 'Ghee', slug: 'ghee', parentId: 'natural-health-care' },
      { id: 'honey', name: 'Honey', slug: 'honey', parentId: 'natural-health-care' },
      { id: 'health-drinks', name: 'Health Drinks', slug: 'health-drinks', parentId: 'natural-health-care' },
    ]
  },
  {
    id: 'natural-food-products',
    name: 'Natural Food Products',
    slug: 'natural-food-products',
    description: 'Organic and natural food items for healthy living',
    icon: '🥗',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    subcategories: [
      { id: 'fruit-beverage', name: 'Fruit Beverage', slug: 'fruit-beverage', parentId: 'natural-food-products' },
      { id: 'diet-food', name: 'Diet Food', slug: 'diet-food', parentId: 'natural-food-products' },
      { id: 'biscuits-cookies', name: 'Biscuits and Cookies', slug: 'biscuits-cookies', parentId: 'natural-food-products' },
      { id: 'spices', name: 'Spices', slug: 'spices', parentId: 'natural-food-products' },
      { id: 'candy', name: 'Candy', slug: 'candy', parentId: 'natural-food-products' },
      { id: 'tea', name: 'Tea', slug: 'tea', parentId: 'natural-food-products' },
      { id: 'jam', name: 'Jam', slug: 'jam', parentId: 'natural-food-products' },
      { id: 'murabba', name: 'Murabba', slug: 'murabba', parentId: 'natural-food-products' },
      { id: 'dalia-poha-vermicelli', name: 'Dalia, Poha and Vermicelli', slug: 'dalia-poha-vermicelli', parentId: 'natural-food-products' },
      { id: 'flours', name: 'Flours', slug: 'flours', parentId: 'natural-food-products' },
      { id: 'sauces-pickles', name: 'Sauces and Pickles', slug: 'sauces-pickles', parentId: 'natural-food-products' },
      { id: 'corn-flakes', name: 'Corn Flakes', slug: 'corn-flakes', parentId: 'natural-food-products' },
      { id: 'dal-pulses', name: 'Dal Pulses', slug: 'dal-pulses', parentId: 'natural-food-products' },
      { id: 'rice', name: 'Rice', slug: 'rice', parentId: 'natural-food-products' },
      { id: 'noodles', name: 'Noodles', slug: 'noodles', parentId: 'natural-food-products' },
      { id: 'oats', name: 'Oats', slug: 'oats', parentId: 'natural-food-products' },
      { id: 'papad', name: 'Papad', slug: 'papad', parentId: 'natural-food-products' },
      { id: 'namkeen', name: 'Namkeen', slug: 'namkeen', parentId: 'natural-food-products' },
      { id: 'edible-oil', name: 'Edible Oil', slug: 'edible-oil', parentId: 'natural-food-products' },
      { id: 'sweets', name: 'Sweets', slug: 'sweets', parentId: 'natural-food-products' },
      { id: 'salt', name: 'Salt', slug: 'salt', parentId: 'natural-food-products' },
      { id: 'sugar', name: 'Sugar', slug: 'sugar', parentId: 'natural-food-products' },
      { id: 'dried-fruits-nuts', name: 'Dried Fruits & Nuts', slug: 'dried-fruits-nuts', parentId: 'natural-food-products' },
      { id: 'breakfast-cereals', name: 'Breakfast Cereals', slug: 'breakfast-cereals', parentId: 'natural-food-products' },
      { id: 'herbal-tea', name: 'Herbal Tea', slug: 'herbal-tea', parentId: 'natural-food-products' },
    ]
  },
  {
    id: 'ayurvedic-medicine',
    name: 'Ayurvedic Medicine',
    slug: 'ayurvedic-medicine',
    description: 'Traditional Ayurvedic medicines for natural healing',
    icon: '💊',
    image: 'https://images.pexels.com/photos/7195/healthy-spoon-syrup-nutrients.jpg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    subcategories: [
      { id: 'kwath', name: 'Kwath', slug: 'kwath', parentId: 'ayurvedic-medicine' },
      { id: 'vati', name: 'Vati', slug: 'vati', parentId: 'ayurvedic-medicine' },
      { id: 'bhasma', name: 'Bhasma', slug: 'bhasma', parentId: 'ayurvedic-medicine' },
      { id: 'churna', name: 'Churna', slug: 'churna', parentId: 'ayurvedic-medicine' },
      { id: 'guggul', name: 'Guggul', slug: 'guggul', parentId: 'ayurvedic-medicine' },
      { id: 'parpati-ras', name: 'Parpati / Ras', slug: 'parpati-ras', parentId: 'ayurvedic-medicine' },
      { id: 'pishti', name: 'Pishti', slug: 'pishti', parentId: 'ayurvedic-medicine' },
      { id: 'arishta', name: 'Arishta', slug: 'arishta', parentId: 'ayurvedic-medicine' },
      { id: 'asava', name: 'Asava', slug: 'asava', parentId: 'ayurvedic-medicine' },
      { id: 'syrup', name: 'Syrup', slug: 'syrup', parentId: 'ayurvedic-medicine' },
      { id: 'godhan-ark', name: 'Godhan Ark', slug: 'godhan-ark', parentId: 'ayurvedic-medicine' },
      { id: 'oil', name: 'Oil', slug: 'oil', parentId: 'ayurvedic-medicine' },
      { id: 'lep', name: 'Lep', slug: 'lep', parentId: 'ayurvedic-medicine' },
      { id: 'balm-inhaler', name: 'Balm & Inhaler', slug: 'balm-inhaler', parentId: 'ayurvedic-medicine' },
      { id: 'eye-ear-oral-care', name: 'Eye, Ear & Oral Care', slug: 'eye-ear-oral-care', parentId: 'ayurvedic-medicine' },
    ]
  },
  {
    id: 'herbal-home-care',
    name: 'Herbal Home Care',
    slug: 'herbal-home-care',
    description: 'Natural and herbal products for home care',
    icon: '🏠',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    subcategories: [
      { id: 'agarbatti-dhoops', name: 'Agarbatti and Dhoops', slug: 'agarbatti-dhoops', parentId: 'herbal-home-care' },
      { id: 'toiletries', name: 'Toiletries', slug: 'toiletries', parentId: 'herbal-home-care' },
      { id: 'hawan-samagri', name: 'Hawan Samagri', slug: 'hawan-samagri', parentId: 'herbal-home-care' },
      { id: 'pooja-essentials', name: 'Pooja Essentials', slug: 'pooja-essentials', parentId: 'herbal-home-care' },
      { id: 'dishwash-bar-gel', name: 'Dishwash Bar and Gel', slug: 'dishwash-bar-gel', parentId: 'herbal-home-care' },
    ]
  },
  {
    id: 'natural-personal-care',
    name: 'Natural Personal Care',
    slug: 'natural-personal-care',
    description: 'Natural and organic personal care products',
    icon: '🧴',
    image: 'https://images.pexels.com/photos/7796/garden-planting-plant-gardening.jpg?auto=compress&cs=tinysrgb&w=800',
    featured: true,
    subcategories: [
      { id: 'skin-care', name: 'Skin Care', slug: 'skin-care', parentId: 'natural-personal-care' },
      { id: 'dental-care', name: 'Dental Care', slug: 'dental-care', parentId: 'natural-personal-care' },
      { id: 'hair-care', name: 'Hair Care', slug: 'hair-care', parentId: 'natural-personal-care' },
      { id: 'body-care', name: 'Body Care', slug: 'body-care', parentId: 'natural-personal-care' },
      { id: 'eye-care', name: 'Eye Care', slug: 'eye-care', parentId: 'natural-personal-care' },
      { id: 'shishu-care', name: 'Shishu Care', slug: 'shishu-care', parentId: 'natural-personal-care' },
    ]
  },
  {
    id: 'patanjali-publication',
    name: 'Patanjali Publication',
    slug: 'patanjali-publication',
    description: 'Books and educational materials on Ayurveda and wellness',
    icon: '📚',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
    subcategories: [
      { id: 'books', name: 'Books', slug: 'books', parentId: 'patanjali-publication' },
      { id: 'ayurveda-book', name: 'Ayurveda - Book', slug: 'ayurveda-book', parentId: 'patanjali-publication' },
      { id: 'biography-book', name: 'Biography - Book', slug: 'biography-book', parentId: 'patanjali-publication' },
      { id: 'naturopathy-book', name: 'Naturopathy - Book', slug: 'naturopathy-book', parentId: 'patanjali-publication' },
      { id: 'pranayam-book', name: 'Pranayam - Book', slug: 'pranayam-book', parentId: 'patanjali-publication' },
      { id: 'vedic-chants-book', name: 'Vedic Chants - Book', slug: 'vedic-chants-book', parentId: 'patanjali-publication' },
      { id: 'yoga-books', name: 'Yoga - Books', slug: 'yoga-books', parentId: 'patanjali-publication' },
      { id: 'lifestyle-management-book', name: 'Lifestyle Management - Book', slug: 'lifestyle-management-book', parentId: 'patanjali-publication' },
      { id: 'biography', name: 'Biography', slug: 'biography', parentId: 'patanjali-publication' },
    ]
  },
  {
    id: 'media',
    name: 'Media',
    slug: 'media',
    description: 'Audio and video content for spiritual and educational purposes',
    icon: '💿',
    subcategories: [
      { id: 'mp3', name: 'MP3', slug: 'mp3', parentId: 'media' },
      { id: 'vcds', name: 'VCDs', slug: 'vcds', parentId: 'media' },
      { id: 'dvds', name: 'DVDs', slug: 'dvds', parentId: 'media' },
      { id: 'audio-cds', name: 'Audio CDs', slug: 'audio-cds', parentId: 'media' },
      { id: 'audio-cassette', name: 'Audio Cassette', slug: 'audio-cassette', parentId: 'media' },
    ]
  },
  {
    id: 'nutraceuticals',
    name: 'Nutraceuticals',
    slug: 'nutraceuticals',
    description: 'Nutritional supplements and health bars',
    icon: '🏋️',
    subcategories: [
      { id: 'nutrition', name: 'Nutrition', slug: 'nutrition', parentId: 'nutraceuticals' },
      { id: 'nutrition-bar', name: 'Nutrition Bar', slug: 'nutrition-bar', parentId: 'nutraceuticals' },
    ]
  },
  {
    id: 'paridhan',
    name: 'Paridhan',
    slug: 'paridhan',
    description: 'Traditional and modern clothing collection',
    icon: '👗',
    image: 'https://images.pexels.com/photos/322207/pexels-photo-322207.jpeg?auto=compress&cs=tinysrgb&w=800',
    subcategories: [
      { id: 'spiritual', name: 'Spiritual', slug: 'spiritual', parentId: 'paridhan' },
      { id: 'home', name: 'Home', slug: 'home', parentId: 'paridhan' },
      { id: 'accessories', name: 'Accessories', slug: 'accessories', parentId: 'paridhan' },
      { id: 'sports-wear', name: 'Sports Wear', slug: 'sports-wear', parentId: 'paridhan' },
      { id: 'women-ethnic', name: 'Women Ethnic', slug: 'women-ethnic', parentId: 'paridhan' },
      { id: 'footwear', name: 'Footwear', slug: 'footwear', parentId: 'paridhan' },
      { id: 'festive', name: 'Festive', slug: 'festive', parentId: 'paridhan' },
      { id: 'innerwear', name: 'Innerwear', slug: 'innerwear', parentId: 'paridhan' },
      { id: 'kidswear', name: 'Kidswear', slug: 'kidswear', parentId: 'paridhan' },
      { id: 'menswear', name: 'Menswear', slug: 'menswear', parentId: 'paridhan' },
      { id: 'women-indowestern', name: 'Women Indowestern', slug: 'women-indowestern', parentId: 'paridhan' },
    ]
  },
  {
    id: 'copperware',
    name: 'Copperware',
    slug: 'copperware',
    description: 'Traditional copper utensils and vessels',
    icon: '🍯',
    subcategories: [
      { id: 'copperware-products', name: 'Copperware', slug: 'copperware-products', parentId: 'copperware' },
    ]
  },
  {
    id: 'dairy-frozen',
    name: 'Dairy & Frozen Items',
    slug: 'dairy-frozen',
    description: 'Fresh dairy products and frozen foods',
    icon: '🥛',
  },
  {
    id: 'stationery',
    name: 'Stationery',
    slug: 'stationery',
    description: 'Writing materials and office supplies',
    icon: '📝',
    subcategories: [
      { id: 'notebook', name: 'Notebook', slug: 'notebook', parentId: 'stationery' },
    ]
  },
  {
    id: 'organic-agri',
    name: 'Organic Agri Products',
    slug: 'organic-agri',
    description: 'Organic farming and agricultural products',
    icon: '🌱',
    subcategories: [
      { id: 'bio-fertilizers', name: 'Bio Fertilizers', slug: 'bio-fertilizers', parentId: 'organic-agri' },
      { id: 'bio-pesticides', name: 'Bio Pesticides', slug: 'bio-pesticides', parentId: 'organic-agri' },
      { id: 'plant-growth-promoters', name: 'Plant Growth Promoters', slug: 'plant-growth-promoters', parentId: 'organic-agri' },
      { id: 'soil-testing', name: 'Soil Testing', slug: 'soil-testing', parentId: 'organic-agri' },
      { id: 'seeds', name: 'Seeds', slug: 'seeds', parentId: 'organic-agri' },
    ]
  },
  {
    id: 'gift-pack',
    name: 'Gift Pack',
    slug: 'gift-pack',
    description: 'Curated gift packages for special occasions',
    icon: '🎁',
    subcategories: [
      { id: 'gift-packs', name: 'Gift Packs', slug: 'gift-packs', parentId: 'gift-pack' },
    ]
  },
  {
    id: 'bulk-deals',
    name: 'Bulk Deals',
    slug: 'bulk-deals',
    description: 'Special offers and bulk purchase deals',
    icon: '📦',
    subcategories: [
      { id: 'patanjali-bulk-deals', name: 'Patanjali Bulk Deals', slug: 'patanjali-bulk-deals', parentId: 'bulk-deals' },
    ]
  },
  {
    id: 'combo-offers',
    name: 'Combo & Offers',
    slug: 'combo-offers',
    description: 'Special combination deals and offers',
    icon: '💰',
    subcategories: [
      { id: 'combos', name: 'Combos', slug: 'combos', parentId: 'combo-offers' },
    ]
  },
  {
    id: 'credit-card',
    name: 'Credit Card',
    slug: 'credit-card',
    description: 'Financial services and credit card offers',
    icon: '💳',
    subcategories: [
      { id: 'pnb', name: 'PNB', slug: 'pnb', parentId: 'credit-card' },
      { id: 'rbl', name: 'RBL', slug: 'rbl', parentId: 'credit-card' },
      { id: 'swadeshi-samridhi-card', name: 'Swadeshi Samridhi Card', slug: 'swadeshi-samridhi-card', parentId: 'credit-card' },
    ]
  },
];

export const getFeaturedCategories = (): Category[] => {
  return categories.filter(category => category.featured);
};

export const getCategoryById = (id: string): Category | undefined => {
  const findCategory = (cats: Category[]): Category | undefined => {
    for (const cat of cats) {
      if (cat.id === id) return cat;
      if (cat.subcategories) {
        const found = findCategory(cat.subcategories);
        if (found) return found;
      }
    }
    return undefined;
  };
  return findCategory(categories);
};

export const getCategoriesByParent = (parentId?: string): Category[] => {
  if (!parentId) return categories;
  
  const findSubcategories = (cats: Category[]): Category[] => {
    for (const cat of cats) {
      if (cat.id === parentId) return cat.subcategories || [];
      if (cat.subcategories) {
        const found = findSubcategories(cat.subcategories);
        if (found.length > 0) return found;
      }
    }
    return [];
  };
  return findSubcategories(categories);
};

export const searchCategories = (query: string): Category[] => {
  const search = (cats: Category[], results: Category[] = []): Category[] => {
    for (const cat of cats) {
      if (cat.name.toLowerCase().includes(query.toLowerCase()) || 
          cat.description?.toLowerCase().includes(query.toLowerCase())) {
        results.push(cat);
      }
      if (cat.subcategories) {
        search(cat.subcategories, results);
      }
    }
    return results;
  };
  return search(categories);
};