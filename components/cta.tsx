'use client';

import { motion } from 'framer-motion';
import { ButtonPremium } from './ui';
import { Sparkles, Shield, Truck, Award } from 'lucide-react';

export default function CTA() {
  const benefits = [
    { icon: Truck, text: 'Fast Express Shipping', subtext: 'Worldwide' },
    { icon: Shield, text: '100% Results', subtext: 'Guarantee' },
    { icon: Award, text: 'Premium Quality', subtext: 'Guaranteed' }
  ];

  const handleShopCollection = () => {
    const message = 'Hi! I would like to explore your complete product collection. Please share details about all available products.';
    const url = `https://wa.me/+918237450891?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const handleSubscribe = () => {
    const message = 'Hi! I am interested in the Subscribe & Save 20% program. Please provide details about the subscription plans and how to get started.';
    const url = `https://wa.me/+918237450891?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    },
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl"></div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="max-w-6xl mx-auto"
      >
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-gold/10 via-white to-gold/5 border-2 border-gold/30 rounded-3xl md:rounded-[2.5rem] p-8 sm:p-10 md:p-14 lg:p-20 text-center overflow-hidden shadow-2xl">
          {/* Animated background pattern */}
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(212,175,55,0.1),transparent_50%)]"></div>
          </div>

          {/* Floating sparkles - CSS animated */}
          <div className="absolute top-10 right-10 text-gold/20 sparkle-float-rotate-1">
            <Sparkles className="w-8 h-8 md:w-12 md:h-12" />
          </div>
          <div className="absolute bottom-10 left-10 text-gold/20 sparkle-float-rotate-2">
            <Sparkles className="w-6 h-6 md:w-10 md:h-10" />
          </div>

          <div className="relative z-10">
            {/* Eyebrow */}
            <motion.div variants={itemVariants} className="mb-6 md:mb-8">
              <div className="inline-flex items-center gap-2 md:gap-3 bg-gold/20 backdrop-blur-sm px-4 md:px-6 py-2 md:py-3 rounded-full border border-gold/30">
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-gold" />
                <span className="text-gold font-bold tracking-[0.15em] md:tracking-[0.2em] text-xs md:text-sm uppercase">
                  Limited Time Offer
                </span>
                <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-gold" />
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h2
              variants={itemVariants}
              className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground mb-4 md:mb-6 text-balance leading-tight"
            >
              Ready to Transform Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold via-gold-dark to-gold">
                Body & Mind?
              </span>
            </motion.h2>

            {/* Subheading */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-10 md:mb-14 max-w-3xl mx-auto leading-relaxed"
            >
              Join <span className="font-bold text-gold">50,000+</span> elite athletes who've unlocked their genetic potential.
              Start your transformation journey today with science-backed supplements.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 md:gap-5 justify-center mb-12 md:mb-16"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonPremium
                  variant="primary"
                  size="large"
                  onClick={handleShopCollection}
                >
                  <span className="flex items-center gap-2">
                    Shop Collection
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </ButtonPremium>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ButtonPremium
                  variant="secondary"
                  size="large"
                  onClick={handleSubscribe}
                >
                  <span className="flex items-center gap-2">
                    Subscribe & Save 20%
                  </span>
                </ButtonPremium>
              </motion.div>
            </motion.div>

            {/* Benefits Grid */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-8 md:pt-10 border-t border-gold/20"
            >
              {benefits.map((benefit, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="flex flex-col items-center gap-3 p-4 md:p-5 bg-white/50 backdrop-blur-sm rounded-2xl border border-gold/20 hover:border-gold/40 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-gold/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
                  </div>
                  <div className="text-center">
                    <p className="font-bold text-sm md:text-base text-foreground">{benefit.text}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{benefit.subtext}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              variants={itemVariants}
              className="mt-8 md:mt-10 grid grid-cols-2 sm:flex sm:flex-wrap sm:items-center sm:justify-center gap-2 sm:gap-3 md:gap-6 text-xs md:text-sm text-muted-foreground"
            >
              <div className="flex items-center justify-center gap-2 bg-gold/5 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-gold/20 h-10 sm:h-auto">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="whitespace-nowrap text-[10px] sm:text-xs">Secure Checkout</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-gold/5 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-gold/20 h-10 sm:h-auto">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="whitespace-nowrap text-[10px] sm:text-xs">Money-Back</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-gold/5 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-gold/20 h-10 sm:h-auto">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="whitespace-nowrap text-[10px] sm:text-xs">Lab Tested</span>
              </div>
              <div className="flex items-center justify-center gap-2 bg-gold/5 px-3 py-2 md:px-4 md:py-2 rounded-lg border border-gold/20 h-10 sm:h-auto">
                <svg className="w-4 h-4 md:w-5 md:h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="whitespace-nowrap text-[10px] sm:text-xs">Pure Formula</span>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
