'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Star, Eye, Phone } from 'lucide-react';
import { Product } from '@/lib/types';
import { contactInfo } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleWhatsAppOrder = () => {
    const message = `Hi! I'm interested in ordering: ${product.name} (RS ${product.price}). Can you provide more details?`;
    const whatsappUrl = `https://wa.me/${contactInfo.whatsapp.replace(/\s/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handlePhoneOrder = () => {
    window.open(`tel:${contactInfo.phone}`, '_self');
  };

  // Get category icon based on product category
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Sublimation Flags':
        return '🏁';
      case 'Home & Living':
        return '🏠';
      case 'Keychains':
        return '🔑';
      case 'School Bags':
        return '🎒';
      case 'Mugs':
        return '☕';
      case 'Safety Jackets':
        return '🦺';
      case 'Clothing':
        return '👕';
      case 'Customized Phone Covers':
        return '📱';
      default:
        return '📦';
    }
  };

  // Get category color for gradient
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Sublimation Flags':
        return 'from-blue-500 to-blue-600';
      case 'Home & Living':
        return 'from-purple-500 to-purple-600';
      case 'Keychains':
        return 'from-yellow-500 to-yellow-600';
      case 'School Bags':
        return 'from-green-500 to-green-600';
      case 'Mugs':
        return 'from-red-500 to-red-600';
      case 'Safety Jackets':
        return 'from-indigo-500 to-indigo-600';
      case 'Clothing':
        return 'from-cyan-500 to-cyan-600';
      case 'Customized Phone Covers':
        return 'from-lime-500 to-lime-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Product Image Placeholder with Icon */}
      <div className={`h-48 bg-gradient-to-br ${getCategoryColor(product.category)} flex items-center justify-center relative overflow-hidden`}>
        <div className="text-8xl opacity-80 drop-shadow-lg">
          {getCategoryIcon(product.category)}
        </div>
        
        {/* Status Badges */}
        {product.featured && (
          <div className="absolute top-3 left-3 bg-white text-blue-600 px-2 py-1 rounded-full text-xs font-semibold flex items-center z-10 shadow-md">
            <Star className="w-3 h-3 mr-1" />
            Featured
          </div>
        )}
        {!product.inStock && (
          <div className="absolute top-3 right-3 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-semibold z-10 shadow-md">
            Out of Stock
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-2">
          <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
            {product.name}
          </h3>
          <span className="text-lg font-bold text-primary-600 ml-2">
            RS {product.price.toLocaleString()}
          </span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
            {product.category}
          </span>
          
          <div className="flex space-x-2">
            <button
              onClick={handleWhatsAppOrder}
              className="flex items-center justify-center w-8 h-8 bg-green-500 text-white rounded-full hover:bg-green-600 transition-colors"
              title="Order via WhatsApp"
            >
              <ShoppingBag className="w-4 h-4" />
            </button>
            <button
              onClick={handlePhoneOrder}
              className="flex items-center justify-center w-8 h-8 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
              title="Call to order"
            >
              <Phone className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
