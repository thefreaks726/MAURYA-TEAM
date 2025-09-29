import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Menu, X, ChevronDown, User, Heart } from 'lucide-react';
import { categories, getFeaturedCategories } from '../data/categories';
import { Button, Input } from './ui/components';
import { useCart } from '../context/CartContext';

interface ModernHeaderProps {
  onBackToHome: () => void;
  onViewCart: () => void;
}

const ModernHeader: React.FC<ModernHeaderProps> = ({ onBackToHome, onViewCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state } = useCart();
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const cartItemCount = state.items.reduce((total: number, item) => total + item.quantity, 0);
  const featuredCategories = getFeaturedCategories();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
        setActiveCategory(null);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleCategoryHover = (categoryId: string) => {
    setActiveCategory(categoryId);
    setIsMegaMenuOpen(true);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Handle search functionality
      console.log('Searching for:', searchQuery);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-orange-600 to-orange-700 text-white py-2 px-4 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="hidden md:flex items-center space-x-6">
            <span>📞 Customer Care: 1800-180-0019</span>
            <span>✉️ support@patanjaliayurved.net</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>Free Shipping on orders above ₹500</span>
            <div className="flex items-center space-x-2">
              <span>Follow us:</span>
              <div className="flex space-x-1">
                <a href="#" className="hover:text-orange-200">📘</a>
                <a href="#" className="hover:text-orange-200">📷</a>
                <a href="#" className="hover:text-orange-200">🐦</a>
                <a href="#" className="hover:text-orange-200">📺</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3 cursor-pointer"
              onClick={onBackToHome}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Patanjali
                </h1>
                <p className="text-xs text-gray-500">Ayurvedic Products</p>
              </div>
            </motion.div>

            {/* Search Bar */}
            <div className="hidden md:flex flex-1 max-w-xl mx-8">
              <form onSubmit={handleSearch} className="w-full relative">
                <div className={`relative transition-all duration-300 ${
                  isSearchFocused ? 'transform scale-105' : ''
                }`}>
                  <Input
                    type="text"
                    placeholder="Search for products, categories..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onFocus={() => setIsSearchFocused(true)}
                    onBlur={() => setIsSearchFocused(false)}
                    className="w-full pl-4 pr-12 py-3 rounded-full border-2 border-gray-200 focus:border-orange-500 shadow-sm"
                  />
                  <Button
                    type="submit"
                    size="sm"
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-2"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-4">
              {/* User Account */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <User className="h-6 w-6" />
                <span className="text-sm">Account</span>
              </motion.button>

              {/* Wishlist */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="hidden md:flex items-center space-x-1 text-gray-700 hover:text-orange-600 transition-colors"
              >
                <Heart className="h-6 w-6" />
                <span className="text-sm">Wishlist</span>
              </motion.button>

              {/* Cart */}
              <motion.button
                onClick={onViewCart}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="relative flex items-center space-x-2 bg-orange-600 text-white px-4 py-2 rounded-full hover:bg-orange-700 transition-colors"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="font-medium">Cart</span>
                {cartItemCount > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-bold"
                  >
                    {cartItemCount}
                  </motion.span>
                )}
              </motion.button>

              {/* Mobile Menu Toggle */}
              <motion.button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                whileTap={{ scale: 0.9 }}
                className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Bar */}
      <div className="hidden md:block bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto">
          <nav className="flex items-center space-x-8 px-4 py-3">
            <motion.button
              onMouseEnter={() => handleCategoryHover('all')}
              className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-medium transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <span>All Categories</span>
              <ChevronDown className="h-4 w-4" />
            </motion.button>

            {featuredCategories.slice(1, 7).map((category) => (
              <motion.button
                key={category.id}
                onMouseEnter={() => handleCategoryHover(category.id)}
                className="text-gray-700 hover:text-orange-600 font-medium transition-colors whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
              >
                {category.name}
              </motion.button>
            ))}

            <motion.button
              className="text-red-600 font-semibold flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
            >
              <span>🔥 Special Offers</span>
            </motion.button>

            <motion.button
              className="text-green-600 font-semibold flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
            >
              <span>🆕 New Arrivals</span>
            </motion.button>
          </nav>
        </div>
      </div>

      {/* Mega Menu */}
      <AnimatePresence>
        {isMegaMenuOpen && (
          <motion.div
            ref={megaMenuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-gray-200 z-40"
            onMouseLeave={() => {
              setIsMegaMenuOpen(false);
              setActiveCategory(null);
            }}
          >
            <div className="max-w-7xl mx-auto p-8">
              <div className="grid grid-cols-4 gap-8">
                {activeCategory && (
                  <>
                    {/* Main Categories */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Main Categories</h3>
                      <ul className="space-y-2">
                        {categories.slice(0, 8).map((category) => (
                          <li key={category.id}>
                            <a
                              href={`#${category.slug}`}
                              className="text-gray-600 hover:text-orange-600 transition-colors flex items-center space-x-2"
                            >
                              <span>{category.icon}</span>
                              <span>{category.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Popular Categories */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Popular Categories</h3>
                      <ul className="space-y-2">
                        {featuredCategories.map((category) => (
                          <li key={category.id}>
                            <a
                              href={`#${category.slug}`}
                              className="text-gray-600 hover:text-orange-600 transition-colors flex items-center space-x-2"
                            >
                              <span>{category.icon}</span>
                              <span>{category.name}</span>
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Featured Products */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Featured Products</h3>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                          <img
                            src="https://images.pexels.com/photos/1956598/pexels-photo-1956598.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                            alt="Honey"
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-sm">Patanjali Honey</p>
                            <p className="text-orange-600 font-semibold text-sm">₹180</p>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-50">
                          <img
                            src="https://images.pexels.com/photos/7195/healthy-spoon-syrup-nutrients.jpg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop"
                            alt="Chyawanprash"
                            className="w-12 h-12 rounded-lg object-cover"
                          />
                          <div>
                            <p className="font-medium text-sm">Chyawanprash Special</p>
                            <p className="text-orange-600 font-semibold text-sm">₹285</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Special Offers */}
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-4">Special Offers</h3>
                      <div className="bg-gradient-to-br from-orange-100 to-red-100 p-4 rounded-lg">
                        <h4 className="font-semibold text-orange-800 mb-2">Weekend Sale!</h4>
                        <p className="text-sm text-orange-700 mb-3">Up to 30% off on selected items</p>
                        <Button size="sm" className="w-full">
                          Shop Now
                        </Button>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="p-4 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="relative">
                <Input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pr-12"
                />
                <Button
                  type="submit"
                  size="sm"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </form>

              {/* Mobile Navigation */}
              <nav className="space-y-2">
                {featuredCategories.map((category) => (
                  <a
                    key={category.id}
                    href={`#${category.slug}`}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="text-xl">{category.icon}</span>
                    <span className="font-medium">{category.name}</span>
                  </a>
                ))}
              </nav>

              {/* Mobile Actions */}
              <div className="border-t pt-4 space-y-2">
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <User className="h-5 w-5" />
                  <span>My Account</span>
                </button>
                <button className="w-full flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                  <Heart className="h-5 w-5" />
                  <span>Wishlist</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default ModernHeader;