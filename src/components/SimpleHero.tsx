import React from 'react';
import { ArrowRight, Star, Shield, Truck, Award } from 'lucide-react';

const SimpleHero: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-orange-50 to-red-50 overflow-hidden pt-16">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-orange-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-red-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-yellow-200 rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6">
            Pure & Natural
            <span className="block text-orange-600">Ayurvedic Products</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover the ancient wisdom of Ayurveda with Patanjali's premium collection of natural health and wellness products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-orange-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center gap-2">
              Shop Now <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-orange-50 transition-colors">
              Learn More
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-16">
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600 text-sm">100% Natural & Pure Products</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                <Shield className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Certified Organic</h3>
              <p className="text-gray-600 text-sm">Ayush & ISO Certified</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                <Truck className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Free Delivery</h3>
              <p className="text-gray-600 text-sm">On orders above ₹500</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="bg-white rounded-full p-4 shadow-lg mb-4">
                <Award className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Trusted Brand</h3>
              <p className="text-gray-600 text-sm">10+ Million Happy Customers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleHero;