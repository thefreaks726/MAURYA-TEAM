import React from 'react';

interface SimpleHeaderProps {
  onBackToHome: () => void;
  onViewCart: () => void;
}

const SimpleHeader: React.FC<SimpleHeaderProps> = ({ onBackToHome, onViewCart }) => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={onBackToHome}>
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">Patanjali</h1>
            </div>
          </div>

          {/* Simple Navigation */}
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Products</a>
              <a href="#" className="text-gray-700 hover:text-orange-600 px-3 py-2 rounded-md text-sm font-medium">Categories</a>
            </div>
          </nav>

          {/* Cart Button */}
          <div className="flex items-center">
            <button
              onClick={onViewCart}
              className="bg-orange-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-orange-700 transition-colors"
            >
              Cart
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default SimpleHeader;