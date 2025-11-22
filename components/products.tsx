'use client';

import { motion } from 'framer-motion';
import { SectionHeader, ProductCard } from './ui';
import { products } from '@/data';
import { Sparkles, Award, Zap } from 'lucide-react';

export default function Products() {
  // Duplicate products array for infinite scroll effect
  const duplicatedProducts = [...products, ...products, ...products];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  const scrollVariants = {
    animate: {
      x: [-800, -1600],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 35,
        ease: "linear",
      },
    },
  };

  const highlights = [
    { icon: Award, text: 'Lab Certified', subtext: '100% Pure' },
    { icon: Zap, text: 'Fast Results', subtext: 'Within 30 Days' },
    { icon: Sparkles, text: 'Premium Quality', subtext: 'No Fillers' }
  ];

  return (
    <section id="products" className="section-padding bg-gradient-to-b from-gold/5 via-white to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-gold/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <SectionHeader
          eyebrow="Elite Performance Arsenal"
          title="Engineered for Greatness"
          description="Every formula is a masterpiece of nutritional science, designed to transform your body and elevate your performance beyond limits."
          className="mb-8 md:mb-12"
        />

        {/* Highlights Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20"
        >
          {highlights.map((highlight, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gold/20 rounded-xl px-4 md:px-6 py-3 md:py-4 shadow-md hover:shadow-xl hover:border-gold/40 transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-lg flex items-center justify-center">
                <highlight.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm md:text-base text-foreground">{highlight.text}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{highlight.subtext}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Infinite Horizontal Scroll Products */}
        <div className="relative w-full overflow-hidden">
          {/* Gradient overlays for smooth fade effect */}
          <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-background via-background/50 to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-background via-background/50 to-transparent z-10 pointer-events-none"></div>

          <motion.div
            variants={scrollVariants as any}
            animate="animate"
            className="flex gap-6 md:gap-8 w-max"
          >
            {duplicatedProducts.map((product, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-60 sm:w-72 md:w-80 lg:w-96"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard
                  {...product}
                  index={index}
                  onShopClick={() => console.log(`Shop ${product.name}`)}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
