import React from 'react';
import { Shield, Heart, Leaf, Zap } from 'lucide-react';

const FeaturedSections = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Boost Immunity',
      description: 'Natural ingredients to strengthen your immune system',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: Heart,
      title: 'Heart Health',
      description: 'Ayurvedic solutions for cardiovascular wellness',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: Leaf,
      title: 'Natural Skincare',
      description: 'Pure herbal products for healthy, glowing skin',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: Zap,
      title: 'Energy & Vitality',
      description: 'Natural energy boosters for active lifestyle',
      color: 'bg-yellow-100 text-yellow-600'
    }
  ];

  const bestSellers = [
    {
      name: 'Chyawanprash Special',
      image: 'https://images.pexels.com/photos/7195/healthy-spoon-syrup-nutrients.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      price: '₹285',
      originalPrice: '₹350',
      rating: 4.7
    },
    {
      name: 'Pure Honey',
      image: 'https://images.pexels.com/photos/1956598/pexels-photo-1956598.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      price: '₹180',
      originalPrice: '₹220',
      rating: 4.5
    },
    {
      name: 'Aloe Vera Face Wash',
      image: 'https://images.pexels.com/photos/7796/garden-planting-plant-gardening.jpg?auto=compress&cs=tinysrgb&w=300&h=200&fit=crop',
      price: '₹85',
      originalPrice: '₹100',
      rating: 4.4
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Health Benefits */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Ayurveda?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience the power of traditional medicine backed by thousands of years of wisdom.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300"
                >
                  <div className={`inline-flex p-4 rounded-full ${benefit.color} mb-4`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Best Sellers */}
        <div>
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Best Sellers
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our most loved products trusted by thousands of customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {bestSellers.map((product, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group cursor-pointer"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4 bg-green-600 text-white text-sm px-3 py-1 rounded-full">
                    Best Seller
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-green-600 transition-colors">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-4 h-4 ${
                          i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        ⭐
                      </div>
                    ))}
                    <span className="text-sm text-gray-600 ml-2">{product.rating}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl font-bold text-gray-800">{product.price}</span>
                      <span className="text-gray-400 line-through">{product.originalPrice}</span>
                    </div>
                    <button className="bg-green-600 text-white px-4 py-2 rounded-full font-medium hover:bg-green-700 transition-colors">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSections;