import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, ShoppingCart, Menu, X, ChevronDown, User, Heart, MapPin } from 'lucide-react';
import { getFeaturedCategories, searchCategories } from '../data/categories';
import { products } from '../data/products';
import { useCart } from '../context/CartContext';

interface AnimatedHeaderProps {
  onBackToHome: () => void;
  onViewCart: () => void;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ onBackToHome, onViewCart }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isScrolled, setIsScrolled] = useState(false);
  const { state } = useCart();
  const searchRef = useRef<HTMLDivElement>(null);
  const megaMenuRef = useRef<HTMLDivElement>(null);

  const cartItemCount = state.items.reduce((total: number, item) => total + item.quantity, 0);
  const featuredCategories = getFeaturedCategories().slice(0, 8);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsSearchFocused(false);
      }
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (searchQuery.trim()) {
      const categoryResults = searchCategories(searchQuery);
      const productResults = products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tags?.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
      );
      setSearchResults([...categoryResults.slice(0, 3), ...productResults.slice(0, 5)]);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  const headerVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1
    }
  };

  const searchVariants = {
    focus: {
      scale: 1.02,
      boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
      transition: { duration: 0.3 }
    },
    blur: {
      scale: 1,
      boxShadow: "0 4px 6px rgba(0,0,0,0.05)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <>
      <motion.header
        variants={headerVariants}
        initial="initial"
        animate="animate"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
            : 'bg-white/90 backdrop-blur-sm'
        }`}
      >
        {/* Top Bar */}
        <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm py-2">
          <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <MapPin className="w-4 h-4 mr-1" />
                Free shipping on orders above ₹500
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <span>📞 1800-123-4567</span>
              <span>|</span>
              <span>📧 support@patanjali.com</span>
            </div>
          </div>
        </div>

        {/* Main Header */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              {/* Logo */}
              <motion.div 
                className="flex items-center cursor-pointer"
                onClick={onBackToHome}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  Patanjali
                </div>
              </motion.div>

              {/* Search Bar */}
              <div className="hidden md:block flex-1 max-w-2xl mx-8" ref={searchRef}>
                <motion.div
                  variants={searchVariants}
                  animate={isSearchFocused ? "focus" : "blur"}
                  className="relative"
                >
                  <div className="relative">
                    <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <input
                      type="text"
                      placeholder="Search for products, categories..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      onFocus={() => setIsSearchFocused(true)}
                      className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-full text-gray-700 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-orange-300 transition-all duration-300"
                    />
                  </div>

                  {/* Search Results */}
                  <AnimatePresence>
                    {isSearchFocused && searchResults.length > 0 && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-2xl shadow-xl border border-gray-100 max-h-96 overflow-y-auto z-50"
                      >
                        {searchResults.map((result, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 hover:bg-gray-50 cursor-pointer border-b border-gray-50 last:border-b-0"
                          >
                            <div className="flex items-center space-x-3">
                              {result.image ? (
                                <img src={result.image} alt={result.name} className="w-12 h-12 rounded-lg object-cover" />
                              ) : (
                                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center text-orange-600 font-semibold">
                                  {result.name?.charAt(0) || result.category?.charAt(0)}
                                </div>
                              )}
                              <div>
                                <div className="font-medium text-gray-900">{result.name}</div>
                                <div className="text-sm text-gray-500">
                                  {result.category || 'Category'}
                                  {result.price && <span className="ml-2 text-orange-600 font-semibold">₹{result.price}</span>}
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </div>

              {/* Navigation */}
              <div className="hidden lg:flex items-center space-x-8">
                <motion.div
                  className="relative"
                  ref={megaMenuRef}
                  onMouseEnter={() => setIsMegaMenuOpen(true)}
                  onMouseLeave={() => setIsMegaMenuOpen(false)}
                >
                  <button className="flex items-center space-x-1 text-gray-700 hover:text-orange-600 font-medium transition-colors">
                    <span>Categories</span>
                    <ChevronDown className="w-4 h-4" />
                  </button>

                  {/* Mega Menu */}
                  <AnimatePresence>
                    {isMegaMenuOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-screen max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
                      >
                        <div className="grid grid-cols-4 gap-6">
                          {featuredCategories.map((category, index) => (
                            <motion.div
                              key={category.id}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group cursor-pointer"
                            >
                              <div className="text-center">
                                <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-100 to-red-100 rounded-full flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                                  {category.icon}
                                </div>
                                <h3 className="font-semibold text-gray-900 group-hover:text-orange-600 transition-colors">
                                  {category.name}
                                </h3>
                                <p className="text-sm text-gray-500 mt-1">{category.description}</p>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  About
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-700 hover:text-orange-600 font-medium transition-colors"
                >
                  Contact
                </motion.button>
              </div>

              {/* Right Side Actions */}
              <div className="flex items-center space-x-4">
                <motion.button
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-red-500 transition-colors"
                >
                  <Heart className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 text-gray-600 hover:text-blue-500 transition-colors"
                >
                  <User className="w-6 h-6" />
                </motion.button>

                <motion.button
                  onClick={onViewCart}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors"
                >
                  <ShoppingCart className="w-6 h-6" />
                  {cartItemCount > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold"
                    >
                      {cartItemCount}
                    </motion.span>
                  )}
                </motion.button>

                {/* Mobile Menu Button */}
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="lg:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" onClick={() => setIsMenuOpen(false)} />
            <div className="fixed top-0 right-0 bottom-0 w-80 bg-white shadow-xl">
              <div className="p-6 space-y-6 mt-20">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full pl-10 pr-4 py-3 bg-gray-50 rounded-lg focus:outline-none focus:bg-white focus:ring-2 focus:ring-orange-300"
                  />
                </div>
                <nav className="space-y-4">
                  {featuredCategories.slice(0, 6).map((category) => (
                    <button
                      key={category.id}
                      className="flex items-center space-x-3 w-full text-left p-3 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                      <span className="text-xl">{category.icon}</span>
                      <span className="font-medium text-gray-900">{category.name}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AnimatedHeader;