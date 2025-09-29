import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade, Parallax } from 'swiper/modules';
import { gsap } from 'gsap';
import { ArrowRight, Star, Shield, Truck, Award, Play } from 'lucide-react';

const HeroCarousel: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-content', 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const heroSlides = [
    {
      id: 1,
      title: "Pure Ayurvedic",
      subtitle: "Wellness Revolution",
      description: "Discover the ancient wisdom of Ayurveda with our premium collection of natural health products. Transform your wellness journey today.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ctaText: "Shop Ayurvedic",
      bgGradient: "from-orange-600 to-red-600"
    },
    {
      id: 2,
      title: "Natural Beauty",
      subtitle: "Radiant Glow",
      description: "Enhance your natural beauty with our organic skincare and beauty products. Pure ingredients for pure radiance.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80",
      ctaText: "Explore Beauty",
      bgGradient: "from-pink-600 to-purple-600"
    },
    {
      id: 3,
      title: "Organic Foods",
      subtitle: "Nourish Your Body",
      description: "Fuel your body with our range of organic foods and nutritional supplements. Pure nutrition for pure health.",
      image: "https://images.unsplash.com/photo-1490818387583-1baba5e638af?ixlib=rb-4.0.3&auto=format&fit=crop&w=2071&q=80",
      ctaText: "Shop Foods",
      bgGradient: "from-green-600 to-teal-600"
    }
  ];

  return (
    <div ref={heroRef} className="relative w-full h-screen bg-black overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade, Parallax]}
        effect="fade"
        parallax={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: '.swiper-button-next-custom',
          prevEl: '.swiper-button-prev-custom',
        }}
        pagination={{
          el: '.swiper-pagination-custom',
          clickable: true,
          renderBullet: (_index: number, className: string) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        loop={true}
        speed={1000}
        className="w-full h-full absolute inset-0"
        style={{ height: '100vh' }}
      >
        {heroSlides.map((slide) => (
          <SwiperSlide key={slide.id} className="relative w-full h-full">
            {/* Background Image with Parallax */}
            <div
              className="absolute inset-0 bg-cover bg-center bg-no-repeat"
              style={{ backgroundImage: `url(${slide.image})` }}
              data-swiper-parallax="-23%"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${slide.bgGradient} opacity-70`} />
            </div>

            {/* Content */}
            <div className="relative z-10 h-full flex items-center justify-center md:justify-start">
              <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
                <div className="max-w-4xl text-center md:text-left">
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hero-content space-y-6"
                  >
                    <h1 
                      className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight"
                      data-swiper-parallax="-300"
                    >
                      {slide.title}
                      <span className="block text-yellow-300 text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl">{slide.subtitle}</span>
                    </h1>

                    <p 
                      className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl leading-relaxed mx-auto md:mx-0"
                      data-swiper-parallax="-200"
                    >
                      {slide.description}
                    </p>

                    <div 
                      className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
                      data-swiper-parallax="-100"
                    >
                      <motion.button
                        whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white text-gray-900 px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 shadow-xl"
                      >
                        {slide.ctaText} <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                      </motion.button>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4 sm:w-5 sm:h-5" /> Watch Video
                      </motion.button>
                    </div>

                    {/* Trust Indicators */}
                    <div 
                      className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-8"
                      data-swiper-parallax="-50"
                    >
                      {[
                        { icon: Star, text: "Premium Quality", color: "text-yellow-400" },
                        { icon: Shield, text: "100% Certified", color: "text-green-400" },
                        { icon: Truck, text: "Free Shipping", color: "text-blue-400" },
                        { icon: Award, text: "Trusted Brand", color: "text-purple-400" }
                      ].map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 }}
                          className="flex items-center justify-center md:justify-start space-x-2 sm:space-x-3 text-white"
                        >
                          <item.icon className={`w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ${item.color}`} />
                          <span className="text-xs sm:text-sm font-medium">{item.text}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <motion.div
              animate={{ 
                y: [0, -20, 0],
                rotate: [0, 5, 0] 
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute top-16 md:top-20 right-4 md:right-20 w-12 h-12 md:w-16 md:h-16 bg-white bg-opacity-20 rounded-full backdrop-blur-sm hidden sm:block z-10"
            />

            <motion.div
              animate={{ 
                y: [0, 15, 0],
                x: [0, 10, 0] 
              }}
              transition={{ 
                duration: 6, 
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1 
              }}
              className="absolute bottom-24 md:bottom-32 left-4 md:left-20 w-10 h-10 md:w-12 md:h-12 bg-yellow-400 bg-opacity-30 rounded-full backdrop-blur-sm hidden sm:block z-10"
            />
          </SwiperSlide>
        ))}

        {/* Custom Navigation */}
        <div className="swiper-button-prev-custom absolute left-2 sm:left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-opacity-30 transition-all duration-300 group">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white rotate-180 group-hover:scale-110 transition-transform" />
        </div>
        
        <div className="swiper-button-next-custom absolute right-2 sm:right-4 md:right-8 top-1/2 transform -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer hover:bg-opacity-30 transition-all duration-300 group">
          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white group-hover:scale-110 transition-transform" />
        </div>

        {/* Custom Pagination */}
        <div className="swiper-pagination-custom absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30 flex space-x-3" />
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 z-20 text-white text-center hidden md:block"
      >
        <div className="text-xs sm:text-sm mb-2">Scroll to explore</div>
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center mx-auto">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-0.5 h-2 sm:w-1 sm:h-3 bg-white rounded-full mt-1 sm:mt-2"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default HeroCarousel;