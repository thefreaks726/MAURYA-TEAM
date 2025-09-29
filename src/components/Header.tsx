import React, { useState } from 'react';
import { Search, ShoppingCart, Menu, X, Leaf } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface HeaderProps {
  onBackToHome: () => void;
  onViewCart: () => void;
  currentView: string;
}

const Header = ({ onBackToHome, onViewCart, currentView }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { state } = useCart();

  const totalItems = state.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={onBackToHome}
          >
            <div className="bg-green-500 p-2 rounded-lg mr-3 group-hover:bg-green-600 transition-colors">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-800 group-hover:text-green-600 transition-colors">
              Patanjali
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button 
              onClick={onBackToHome}
              className={`hover:text-green-600 transition-colors ${
                currentView === 'home' ? 'text-green-600 font-medium' : 'text-gray-600'
              }`}
            >
              Home
            </button>
            <button className="text-gray-600 hover:text-green-600 transition-colors">
              Products
            </button>
            <button className="text-gray-600 hover:text-green-600 transition-colors">
              Categories
            </button>
            <button className="text-gray-600 hover:text-green-600 transition-colors">
              About
            </button>
            <button className="text-gray-600 hover:text-green-600 transition-colors">
              Contact
            </button>
          </nav>

          {/* Search Bar */}
          <div className="hidden md:flex items-center flex-1 max-w-lg mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center">
            <button 
              onClick={onViewCart}
              className="relative p-2 text-gray-600 hover:text-green-600 transition-colors"
            >
              <ShoppingCart className="h-6 w-6" />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden ml-2 p-2 text-gray-600"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-full focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
                />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <button 
                onClick={onBackToHome}
                className="text-left py-2 text-gray-600 hover:text-green-600"
              >
                Home
              </button>
              <button className="text-left py-2 text-gray-600 hover:text-green-600">
                Products
              </button>
              <button className="text-left py-2 text-gray-600 hover:text-green-600">
                Categories
              </button>
              <button className="text-left py-2 text-gray-600 hover:text-green-600">
                About
              </button>
              <button className="text-left py-2 text-gray-600 hover:text-green-600">
                Contact
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;