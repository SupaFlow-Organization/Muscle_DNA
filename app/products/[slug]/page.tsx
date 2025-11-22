'use client';

import { useParams } from 'next/navigation';
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Star, Check, Truck, Shield, Award } from 'lucide-react';
import { products } from '@/data';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { ButtonPremium } from '@/components/ui';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  
  // Find product by slug (convert name to slug format)
  const product = products.find(p => 
    p.name.toLowerCase().replace(/\s+/g, '-') === slug
  );

  const [selectedFlavor, setSelectedFlavor] = useState('Chocolate Almond');
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
          <Link href="/" className="text-gold hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  const flavors = [
    'Chocolate Almond',
    'Kesar Malai Kaju',
    'Café Mocha',
    'Malai Kulfi',
    'Pineapple Blast',
    'Mango Tango'
  ];

  const features = [
    { icon: Award, text: 'GMP Certified' },
    { icon: Shield, text: 'Lab Tested' },
    { icon: Truck, text: 'Free Shipping' },
    { icon: Star, text: '4.9/5 Rating' }
  ];

  const benefits = [
    'Supports muscle growth and recovery',
    'Enhances strength and endurance',
    'Improves protein synthesis',
    'Boosts energy levels',
    'Accelerates post-workout recovery',
    'Contains essential amino acids'
  ];

  const nutritionFacts = [
    { label: 'Serving Size', value: '30g (1 scoop)' },
    { label: 'Servings Per Container', value: '30' },
    { label: 'Calories', value: '120' },
    { label: 'Protein', value: '25g' },
    { label: 'Carbohydrates', value: '3g' },
    { label: 'Fat', value: '2g' },
    { label: 'BCAA', value: '5g' },
    { label: 'Creatine', value: '3g' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-24 pb-16">
        <div className="container-custom px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/#products" className="inline-flex items-center gap-2 text-muted-foreground hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Product Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="sticky top-24">
                <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 lg:p-12 border border-gold/10">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={500}
                    height={600}
                    className="w-full h-auto object-contain"
                    priority
                  />
                </div>
                
                {/* Features Bar */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
                  {features.map((feature, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2 bg-white border border-gold/10 rounded-xl p-3">
                      <feature.icon className="w-5 h-5 text-gold" />
                      <span className="text-xs font-semibold text-center">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Product Details */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Category */}
              <div className="inline-block bg-gold/10 text-gold px-4 py-2 rounded-lg text-sm font-semibold uppercase tracking-wider">
                {product.category}
              </div>

              {/* Title */}
              <div>
                <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground mb-3">
                  {product.name}
                </h1>
                <p className="text-xl text-gold/80 font-medium">{product.flavor}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">(4.9/5 from 2,450 reviews)</span>
              </div>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>

              {/* Flavor Selection */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Select Flavor
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {flavors.map((flavor) => (
                    <button
                      key={flavor}
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`px-4 py-3 rounded-lg border-2 transition-all text-sm font-medium ${
                        selectedFlavor === flavor
                          ? 'border-gold bg-gold/10 text-gold'
                          : 'border-gray-200 hover:border-gold/50 text-muted-foreground'
                      }`}
                    >
                      {flavor}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Quantity
                </label>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-12 h-12 rounded-lg border-2 border-gray-200 hover:border-gold transition-colors flex items-center justify-center font-semibold"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-12 h-12 rounded-lg border-2 border-gray-200 hover:border-gold transition-colors flex items-center justify-center font-semibold"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Price */}
              <div className="bg-gradient-to-br from-gold/10 to-gold/5 rounded-2xl p-6 border border-gold/20">
                <div className="flex items-baseline gap-3 mb-2">
                  <span className="text-4xl font-bold text-foreground">
                    ₹{product.price ? Math.round(product.price * 0.8).toLocaleString('en-IN') : '6,799'}
                  </span>
                  <span className="text-xl text-muted-foreground line-through">
                    ₹{product.price ? product.price.toLocaleString('en-IN') : '8,499'}
                  </span>
                  <span className="bg-gold text-white px-3 py-1 rounded-lg text-sm font-semibold">
                    Save 20%
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">Inclusive of all taxes</p>
              </div>

              {/* Buy Button */}
              <div className="flex gap-4">
                <ButtonPremium variant="primary" className="flex-1 flex items-center justify-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Buy Now
                </ButtonPremium>
                <button className="px-8 py-4 rounded-lg border-2 border-gold text-gold hover:bg-gold/10 transition-all font-semibold">
                  Add to Cart
                </button>
              </div>

              {/* Benefits */}
              <div className="bg-white rounded-2xl p-6 border border-gold/10">
                <h3 className="font-bold text-lg text-foreground mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Nutrition Facts */}
              <div className="bg-white rounded-2xl p-6 border border-gold/10">
                <h3 className="font-bold text-lg text-foreground mb-4">Nutrition Facts</h3>
                <div className="space-y-3">
                  {nutritionFacts.map((fact, idx) => (
                    <div key={idx} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-0">
                      <span className="text-muted-foreground">{fact.label}</span>
                      <span className="font-semibold text-foreground">{fact.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
