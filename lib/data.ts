import { Product, Category, ContactInfo } from './types';

export const contactInfo: ContactInfo = {
  phone: '+92 342 0050354',
  whatsapp: '+92 342 0050354',
  address: 'Nangi, Mirpur, Azad Jammu & Kashmir',
  businessHours: 'Monday - Saturday: 9:00 AM - 8:00 PM'
};

export const categories: Category[] = [
  {
    id: '1',
    name: 'Sublimation Flags',
    description: 'High-quality custom sublimation flags',
    icon: '🏁'
  },
  {
    id: '2',
    name: 'Home & Living',
    description: 'Pillows, cushions, and home decor items',
    icon: '🏠'
  },
  {
    id: '3',
    name: 'Keychains',
    description: 'Custom keychains for all occasions',
    icon: '🔑'
  },
  {
    id: '4',
    name: 'School Bags',
    description: 'Personalized school bags with sublimation',
    icon: '🎒'
  },
  {
    id: '5',
    name: 'Mugs',
    description: 'Custom sublimation mugs',
    icon: '☕'
  },
  {
    id: '6',
    name: 'Safety Jackets',
    description: 'High-quality safety jackets',
    icon: '🦺'
  },
  {
    id: '7',
    name: 'Clothing',
    description: 'Custom sublimation shirts',
    icon: '👕'
  },
  {
    id: '8',
    name: 'Customized Phone Covers',
    description: 'Personalized phone covers with custom designs',
    icon: '📱'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Sublimation Flag (Double)',
    description: 'High-quality double-sided sublimation flag with vibrant colors and durable material',
    price: 2000,
    category: 'Sublimation Flags',
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '2',
    name: 'Sublimation Flag (Single)',
    description: 'Single-sided sublimation flag perfect for indoor and outdoor use',
    price: 1500,
    category: 'Sublimation Flags',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '3',
    name: 'Sublimation Pillow',
    description: 'Comfortable pillow with custom sublimation design',
    price: 1500,
    category: 'Home & Living',
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '4',
    name: 'Sublimation Cushion',
    description: 'Soft cushion with personalized sublimation print',
    price: 1200,
    category: 'Home & Living',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '5',
    name: 'Steel Keychain',
    description: 'Durable steel keychain with custom sublimation design',
    price: 500,
    category: 'Keychains',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '6',
    name: 'Double Side Keychain',
    description: 'Double-sided keychain with sublimation on both sides',
    price: 400,
    category: 'Keychains',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '7',
    name: 'Single Side Keychain',
    description: 'Single-sided keychain with custom sublimation design',
    price: 300,
    category: 'Keychains',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '8',
    name: 'School Bag Sublimation (Large)',
    description: 'Large school bag with custom sublimation design',
    price: 2500,
    category: 'School Bags',
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '9',
    name: 'School Bag Sublimation (Medium)',
    description: 'Medium-sized school bag with personalized sublimation',
    price: 2200,
    category: 'School Bags',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '10',
    name: 'Mug Sublimation (White)',
    description: 'White ceramic mug with custom sublimation design',
    price: 800,
    category: 'Mugs',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '11',
    name: 'Mug Sublimation (Color)',
    description: 'Colored ceramic mug with custom sublimation design',
    price: 900,
    category: 'Mugs',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '12',
    name: 'Mug Magic Color',
    description: 'Magic color changing mug with sublimation design',
    price: 1050,
    category: 'Mugs',
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '13',
    name: 'Safety Jacket (Imported Quality)',
    description: 'High-quality imported safety jacket with custom design',
    price: 1500,
    category: 'Safety Jackets',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '14',
    name: 'Safety Jacket (Good Quality)',
    description: 'Good quality safety jacket with custom sublimation',
    price: 1000,
    category: 'Safety Jackets',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '15',
    name: 'Shirts Sublimation (Any Size)',
    description: 'Custom sublimation shirts available in all sizes. Price varies based on design complexity (RS: 1200-2500)',
    price: 1200,
    category: 'Clothing',
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '16',
    name: 'iPhone Custom Cover',
    description: 'Customized phone cover for iPhone with personalized sublimation design. Available for all iPhone models',
    price: 1500,
    category: 'Customized Phone Covers',
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '17',
    name: 'Samsung Custom Cover',
    description: 'Personalized phone cover for Samsung devices with custom sublimation print. Compatible with all Samsung models',
    price: 1500,
    category: 'Customized Phone Covers',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '18',
    name: 'Oppo/Vivo Custom Cover',
    description: 'Custom phone cover for Oppo and Vivo devices with sublimation design. Perfect fit for all models',
    price: 1500,
    category: 'Customized Phone Covers',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '19',
    name: 'Huawei Custom Cover',
    description: 'Personalized phone cover for Huawei devices with custom sublimation artwork',
    price: 1500,
    category: 'Customized Phone Covers',
    inStock: true,
    featured: false,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id: '20',
    name: 'Transparent Custom Cover',
    description: 'Transparent phone cover with custom sublimation design. Available for all phone brands',
    price: 1500,
    category: 'Customized Phone Covers',
    inStock: true,
    featured: true,
    createdAt: new Date(),
    updatedAt: new Date()
  }
];
