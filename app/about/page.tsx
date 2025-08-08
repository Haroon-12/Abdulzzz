'use client';

import { motion } from 'framer-motion';
import { Users, Award, Clock, MapPin } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-secondary-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              About Abdulzzz Services Hub
            </h1>
            <p className="text-xl text-primary-200 max-w-3xl mx-auto">
              Your trusted partner for custom sublimation and personalized printing services in Mirpur, Pakistan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Your Local Sublimation Experts
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                At Abdulzzz Services Hub, we specialize in high-quality sublimation printing and custom design services. 
                Our commitment to excellence and attention to detail has made us the go-to destination for personalized items in Mirpur.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                From flags and banners to phone covers and home decor, we bring your ideas to life with vibrant colors 
                and durable materials that last. Our team of skilled artisans ensures every piece meets our high standards.
              </p>
              <p className="text-lg text-gray-600">
                Located in the heart of Mirpur, we serve both individual customers and businesses, providing 
                professional services with a personal touch.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-lg shadow-lg p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Choose Us?</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Award className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Quality Guaranteed</h4>
                    <p className="text-gray-600">Premium materials and expert craftsmanship ensure lasting quality.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Fast Turnaround</h4>
                    <p className="text-gray-600">Quick delivery without compromising on quality or attention to detail.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Personal Service</h4>
                    <p className="text-gray-600">Direct communication and personalized attention to your needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-semibold text-gray-900">Local Business</h4>
                    <p className="text-gray-600">Supporting the local community with reliable, accessible services.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a comprehensive range of sublimation and custom printing services to meet all your needs.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏁', title: 'Sublimation Flags', desc: 'High-quality custom flags for all occasions' },
              { icon: '🏠', title: 'Home & Living', desc: 'Pillows, cushions, and home decor items' },
              { icon: '📱', title: 'Phone Covers', desc: 'Customized phone covers for all brands' },
              { icon: '👕', title: 'Clothing', desc: 'Personalized shirts and apparel' },
              { icon: '☕', title: 'Mugs', desc: 'Custom sublimation mugs and drinkware' },
              { icon: '🔑', title: 'Keychains', desc: 'Personalized keychains and accessories' },
              { icon: '🎒', title: 'School Bags', desc: 'Custom school bags and backpacks' },
              { icon: '🦺', title: 'Safety Jackets', desc: 'High-quality safety jackets' }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
