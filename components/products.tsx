'use client';

import { motion } from 'framer-motion';
import { SectionHeader, ProductCard, FlavorBadge } from './ui';
import { products, flavors } from '@/data';
import { Sparkles, Award, Zap } from 'lucide-react';

export default function Products() {
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
              className="flex items-center gap-3 bg-white/80 backdrop-blur-sm border border-gold/20 rounded-full px-4 md:px-6 py-3 md:py-4 shadow-md hover:shadow-xl hover:border-gold/40 transition-all"
            >
              <div className="w-10 h-10 md:w-12 md:h-12 bg-gold/10 rounded-full flex items-center justify-center">
                <highlight.icon className="w-5 h-5 md:w-6 md:h-6 text-gold" />
              </div>
              <div className="text-left">
                <p className="font-bold text-sm md:text-base text-foreground">{highlight.text}</p>
                <p className="text-xs md:text-sm text-muted-foreground">{highlight.subtext}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {products.map((product, index) => (
            <motion.div key={index} variants={itemVariants}>
              <ProductCard
                {...product}
                index={index}
                onShopClick={() => console.log(`Shop ${product.name}`)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Flavors Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-20 lg:mt-24 relative"
        >
          {/* Decorative background */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/5 via-white to-gold/10 rounded-3xl md:rounded-[2.5rem] -z-10"></div>
          
          <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-white/50 backdrop-blur-sm rounded-3xl md:rounded-[2.5rem] border-2 border-gold/20 shadow-xl relative overflow-hidden">
            {/* Floating sparkle */}
            <motion.div
              className="absolute top-6 right-6 text-gold/20"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
            </motion.div>

            <div className="text-center mb-8 md:mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 bg-gold/10 px-4 py-2 rounded-full mb-4"
              >
                <Sparkles className="w-4 h-4 text-gold" />
                <span className="text-gold font-semibold text-xs md:text-sm uppercase tracking-wider">
                  Taste the Excellence
                </span>
              </motion.div>
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-3 md:mb-4">
                Delicious Flavors
              </h3>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto">
                Choose from our premium selection of scientifically crafted flavors
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 md:gap-4 lg:gap-6">
              {flavors.map((flavor, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05, duration: 0.4 }}
                >
                  <FlavorBadge
                    name={flavor.name}
                    type={flavor.type}
                    index={idx}
                  />
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-8 md:mt-12 text-center"
            >
              <p className="text-sm md:text-base text-muted-foreground mb-4">
                Can't decide? Try our <span className="font-bold text-gold">Sample Pack</span>
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gold hover:bg-gold-dark text-white px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
              >
                <Sparkles className="w-4 h-4 md:w-5 md:h-5" />
                Order Sample Pack
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
