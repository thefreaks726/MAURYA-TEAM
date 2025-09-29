import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import { gsap } from 'gsap';
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';
import { Button } from './ui/components';

const heroSlides = [
  {
    id: 1,
    title: 'Pure Ayurvedic Products',
    subtitle: 'For Natural Wellness',
    description: 'Discover the power of nature with our premium collection of authentic Ayurvedic products, crafted with traditional wisdom and modern quality.',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1200',
    buttonText: 'Shop Now',
    features: ['100% Natural', 'Lab Tested', 'Authentic Recipes']
  },
  {
    id: 2,
    title: 'Immunity Boosters',
    subtitle: 'Strengthen Your Defense',
    description: 'Build natural immunity with our scientifically formulated Chyawanprash and herbal supplements, trusted by millions.',
    image: 'https://images.pexels.com/photos/7195/healthy-spoon-syrup-nutrients.jpg?auto=compress&cs=tinysrgb&w=1200',
    buttonText: 'Explore Range',
    features: ['45+ Herbs', 'Rich in Vitamin C', 'Time Tested']
  },
  {
    id: 3,
    title: 'Natural Personal Care',
    subtitle: 'Beauty from Nature',
    description: 'Pamper yourself with our range of herbal soaps, shampoos, and skincare products made from pure natural ingredients.',
    image: 'https://images.pexels.com/photos/4465124/pexels-photo-4465124.jpeg?auto=compress&cs=tinysrgb&w=1200',
    buttonText: 'Discover More',
    features: ['Chemical Free', 'Gentle on Skin', 'Ayurvedic Formulas']
  }
];

const features = [
  {
    icon: Shield,
    title: 'Quality Assured',
    description: 'All products are rigorously tested for purity and quality'
  },
  {
    icon: Truck,
    title: 'Free Delivery',
    description: 'Free shipping on orders above ₹500 across India'
  },
  {
    icon: Award,
    title: 'Authentic Products',
    description: 'Direct from Patanjali with authenticity guarantee'
  },
  {
    icon: Star,
    title: 'Trusted by Millions',
    description: 'Join millions of satisfied customers worldwide'
  }
];

const ModernHero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animations on mount
      gsap.from('.hero-bg', {
        scale: 1.2,
        duration: 1.5,
        ease: 'power2.out'
      });

      gsap.from('.feature-card', {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        delay: 0.5,
        ease: 'power2.out'
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const slideVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { 
      opacity: 1, 
      x: 0
    },
    exit: { 
      opacity: 0, 
      x: -100
    }
  };

  return (
    <div ref={heroRef} className="relative min-h-screen bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden mt-32">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Hero Carousel */}
      <div className="relative h-screen">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          loop={true}
          className="h-full"
        >
          {heroSlides.map((slide) => (
            <SwiperSlide key={slide.id} className="relative">
              <div className="grid lg:grid-cols-2 gap-12 items-center h-full max-w-7xl mx-auto px-4 py-20">
                {/* Text Content */}
                <motion.div
                  ref={textRef}
                  className="space-y-6 z-10"
                  initial="hidden"
                  animate="visible"
                  variants={slideVariants}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <span className="inline-block px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                      {slide.subtitle}
                    </span>
                  </motion.div>

                  <motion.h1
                    className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {slide.title.split(' ').map((word, i) => (
                      <motion.span
                        key={i}
                        className={i === slide.title.split(' ').length - 1 ? 'text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600' : ''}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                      >
                        {word}{' '}
                      </motion.span>
                    ))}
                  </motion.h1>

                  <motion.p
                    className="text-xl text-gray-600 leading-relaxed max-w-lg"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    className="flex flex-wrap gap-3 mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    {slide.features.map((feature, i) => (
                      <span
                        key={i}
                        className="flex items-center space-x-1 bg-white px-3 py-1 rounded-full text-sm font-medium text-gray-700 shadow-sm"
                      >
                        <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                        <span>{feature}</span>
                      </span>
                    ))}
                  </motion.div>

                  <motion.div
                    className="flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                  >
                    <Button size="lg" className="group">
                      {slide.buttonText}
                      <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Button>
                    <Button variant="outline" size="lg" className="group">
                      Learn More
                      <motion.div
                        className="ml-2 w-5 h-5 border-2 border-current rounded-full"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      />
                    </Button>
                  </motion.div>
                </motion.div>

                {/* Image Content */}
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  <div className="relative group">
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity"
                      animate={{ 
                        scale: [1, 1.05, 1],
                        rotate: [0, 2, -2, 0]
                      }}
                      transition={{ 
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="hero-bg relative w-full h-96 lg:h-[500px] object-cover rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-500"
                    />
                    
                    {/* Floating Elements */}
                    <motion.div
                      className="absolute -top-6 -left-6 w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center"
                      animate={{ 
                        y: [0, -10, 0],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ 
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      <span className="text-2xl">🌿</span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute -bottom-6 -right-6 w-20 h-20 bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl shadow-lg flex items-center justify-center"
                      animate={{ 
                        y: [0, 10, 0],
                        rotate: [0, -5, 5, 0]
                      }}
                      transition={{ 
                        duration: 5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                      }}
                    >
                      <span className="text-white font-bold">100%</span>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Features Section */}
      <div ref={featuresRef} className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card flex items-center space-x-4 p-4 rounded-xl bg-white shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 text-sm">{feature.title}</h3>
                  <p className="text-gray-600 text-xs leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModernHero;