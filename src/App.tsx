import { useState } from 'react';
import AnimatedHeader from './components/AnimatedHeader';
import HeroCarousel from './components/HeroCarousel';
import LiveAnimatedBackground from './components/LiveAnimatedBackground';
import EnhancedCategoryShowcase from './components/EnhancedCategoryShowcase';
import ProductShowcase from './components/ProductShowcase';
import FeaturedSections from './components/FeaturedSections';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import { CartProvider } from './context/CartContext';
import { Product } from './types/product';

function App() {
  const [currentView, setCurrentView] = useState<'home' | 'product' | 'cart'>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product');
  };

  const handleBackToHome = () => {
    setCurrentView('home');
    setSelectedProduct(null);
  };

  const handleViewCart = () => {
    setCurrentView('cart');
  };

  return (
    <CartProvider>
      <div className="min-h-screen bg-black relative parallax-container">
        {/* Live Animated Background */}
        <LiveAnimatedBackground />

        {/* Animated Header */}
        <AnimatedHeader 
          onBackToHome={handleBackToHome} 
          onViewCart={handleViewCart}
        />
        
        {currentView === 'home' && (
          <>
            <HeroCarousel />
            <EnhancedCategoryShowcase />
            <ProductShowcase onProductClick={handleProductClick} />
            <FeaturedSections />
            <Testimonials />
            <Footer />
          </>
        )}
        
        {currentView === 'product' && selectedProduct && (
          <ProductDetail 
            product={selectedProduct} 
            onBack={handleBackToHome} 
          />
        )}
        
        {currentView === 'cart' && (
          <Cart onBack={handleBackToHome} />
        )}
      </div>
    </CartProvider>
  );
}

export default App;