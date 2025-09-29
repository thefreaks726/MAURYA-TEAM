import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight, Star, ShoppingCart, Eye, Heart } from 'lucide-react';
import { getFeaturedCategories } from '../data/categories';
import { getFeaturedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

const EnhancedCategoryShowcase: React.FC = () => {
  const showcaseRef = useRef<HTMLDivElement>(null);
  const { dispatch } = useCart();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax background animation
      gsap.to('.parallax-bg', {
        yPercent: -50,
        ease: 'none',
        scrollTrigger: {
          trigger: showcaseRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        }
      });

      // Category cards animation
      gsap.fromTo('.category-card', 
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'back.out(1.7)',
          scrollTrigger: {
            trigger: '.category-grid',
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Product cards animation
      gsap.fromTo('.product-card', 
        { y: 80, opacity: 0, rotateY: 15 },
        {
          y: 0,
          opacity: 1,
          rotateY: 0,
          duration: 1.2,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.products-section',
            start: 'top 75%',
            end: 'bottom 25%',
            toggleActions: 'play none none reverse'
          }
        }
      );

      // Stats counter animation
      gsap.fromTo('.stat-number', 
        { innerText: 0 },
        {
          innerText: (_i: number, el: Element) => el.getAttribute('data-count'),
          duration: 2,
          ease: 'power2.out',
          snap: { innerText: 1 },
          scrollTrigger: {
            trigger: '.stats-section',
            start: 'top 80%',
          }
        }
      );
    }, showcaseRef);

    return () => ctx.revert();
  }, []);

  const featuredCategories = getFeaturedCategories().slice(0, 6);
  const featuredProducts = getFeaturedProducts().slice(0, 8);

  const handleAddToCart = (e: React.MouseEvent, product: any) => {
    e.stopPropagation();
    dispatch({ type: 'ADD_ITEM', payload: { ...product, quantity: 1 } });
  };

  const stats = [
    { number: 10000, label: 'Happy Customers', suffix: '+' },
    { number: 500, label: 'Products', suffix: '+' },
    { number: 15, label: 'Years Experience', suffix: '' },
    { number: 50, label: 'Cities', suffix: '+' }
  ];

  return (
    <div ref={showcaseRef} className="relative bg-white overflow-hidden">
      {/* Parallax Background */}
      <div className="parallax-bg absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100 via-red-50 to-yellow-100" />
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http://www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%2523ff6b35%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
      </div>

      {/* Categories Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold gradient-text mb-6">
              Explore Our Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover a wide range of natural products designed to enhance your health and wellness journey.
            </p>
          </motion.div>

          <div className="category-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCategories.map((category) => (
              <motion.div
                key={category.id}
                className="category-card group relative"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden card-hover">
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-red-50 opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  
                  {/* Icon */}
                  <div className="relative z-10 text-center">
                    <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center text-3xl text-white shadow-xl group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-orange-600 transition-colors">
                      {category.name}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {category.description}
                    </p>
                    
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors shadow-lg"
                    >
                      Explore <ArrowRight className="w-4 h-4" />
                    </motion.button>
                  </div>

                  {/* Floating elements */}
                  <div className="absolute -top-2 -right-2 w-16 h-16 bg-yellow-400 rounded-full opacity-20 group-hover:opacity-30 transition-opacity duration-300 float-animation" />
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-purple-400 rounded-full opacity-15 group-hover:opacity-25 transition-opacity duration-300" style={{ animationDelay: '1s' }} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section relative py-20 bg-gradient-to-r from-orange-600 to-red-600 text-white">
        <div className="absolute inset-0 bg-black opacity-20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl font-bold mb-2">
                  <span className="stat-number" data-count={stat.number}>0</span>
                  <span>{stat.suffix}</span>
                </div>
                <div className="text-xl font-medium opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Carousel */}
      <section className="products-section relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-800 mb-6">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Handpicked premium products that represent the best of Ayurvedic science and natural wellness.
            </p>
          </motion.div>

          <div className="product-carousel">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              navigation={{
                nextEl: '.featured-next',
                prevEl: '.featured-prev',
              }}
              pagination={{
                el: '.featured-pagination',
                clickable: true,
              }}
              breakpoints={{
                640: { slidesPerView: 2 },
                768: { slidesPerView: 3 },
                1024: { slidesPerView: 4 },
              }}
              className="pb-16"
            >
              {featuredProducts.map((product, index) => (
                <SwiperSlide key={product.id}>
                  <motion.div
                    className="product-card group bg-white rounded-2xl shadow-lg overflow-hidden card-hover"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      
                      {/* Overlay actions */}
                      <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white rounded-full text-gray-800 hover:bg-orange-600 hover:text-white transition-colors"
                        >
                          <Eye className="w-5 h-5" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-3 bg-white rounded-full text-gray-800 hover:bg-red-500 hover:text-white transition-colors"
                        >
                          <Heart className="w-5 h-5" />
                        </motion.button>
                      </div>

                      {/* Badge */}
                      {product.featured && (
                        <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </div>
                      )}
                    </div>

                    <div className="p-6">
                      <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors">
                        {product.name}
                      </h3>
                      
                      <div className="flex items-center mb-3">
                        <div className="flex text-yellow-400 mr-2">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className={`w-4 h-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">({product.reviews})</span>
                      </div>

                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <span className="text-2xl font-bold text-orange-600">₹{product.price}</span>
                          {product.originalPrice && (
                            <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
                          )}
                        </div>
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={(e) => handleAddToCart(e, product)}
                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 glow-animation"
                      >
                        <ShoppingCart className="w-4 h-4" />
                        Add to Cart
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Navigation */}
            <div className="featured-prev absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" />
            <div className="featured-next absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer" />
            <div className="featured-pagination flex justify-center mt-8" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedCategoryShowcase;