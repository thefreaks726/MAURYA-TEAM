import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-green-50 to-green-100 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-green-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-green-300 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-green-500 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-8 h-8 bg-green-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
              Pure
              <span className="text-green-600 block">Ayurvedic</span>
              Products
            </h1>
            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-lg">
              Discover the power of nature with our authentic Ayurvedic products. 
              From immunity boosters to natural skincare, embrace wellness the traditional way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="bg-green-600 text-white px-8 py-3 rounded-full font-medium hover:bg-green-700 transition-colors flex items-center justify-center gap-2 group">
                Shop Now
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-3 rounded-full font-medium hover:bg-green-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-2xl shadow-xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/1956598/pexels-photo-1956598.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                alt="Featured Product"
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Pure Honey</h3>
                <p className="text-gray-600 mb-4">100% Natural & Organic</p>
                <div className="flex items-center justify-center gap-2">
                  <span className="text-2xl font-bold text-green-600">₹180</span>
                  <span className="text-gray-400 line-through">₹220</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;