import React from 'react';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      location: 'Mumbai',
      rating: 5,
      text: 'Patanjali products have transformed my skincare routine. The Neem-Haldi soap is amazing for my sensitive skin!',
      product: 'Neem-Haldi Soap'
    },
    {
      name: 'Rajesh Kumar',
      location: 'Delhi',
      rating: 5,
      text: 'Been using Chyawanprash for 2 years now. My immunity has improved significantly and I rarely fall sick.',
      product: 'Chyawanprash Special'
    },
    {
      name: 'Anita Patel',
      location: 'Ahmedabad',
      rating: 4,
      text: 'The honey is absolutely pure and delicious. Great quality at reasonable prices. Highly recommend!',
      product: 'Pure Honey'
    },
    {
      name: 'Vikram Singh',
      location: 'Jaipur',
      rating: 5,
      text: 'Excellent Ayurvedic medicines. Mukta Vati has helped me manage my blood pressure naturally.',
      product: 'Divya Mukta Vati'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Patanjali for their health and wellness needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-green-50 rounded-2xl p-6 relative hover:shadow-lg transition-shadow duration-300"
            >
              <Quote className="absolute top-4 right-4 h-8 w-8 text-green-200" />
              
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-4 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
              
              <div className="border-t border-green-100 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-gray-800">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-green-600 font-medium">Verified Purchase</p>
                    <p className="text-xs text-gray-500">{testimonial.product}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-green-600 rounded-2xl p-8 text-white text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">10L+</div>
              <div className="text-green-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="text-green-100">Products</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25+</div>
              <div className="text-green-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">4.5★</div>
              <div className="text-green-100">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;