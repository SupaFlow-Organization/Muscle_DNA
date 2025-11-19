'use client';

import { motion } from 'framer-motion';
import { SectionHeader, FeatureCard, AnimatedContainer, BackgroundEffects } from './ui';
import { features } from '@/data';
import { Sparkles, TrendingUp, Users, Star } from 'lucide-react';

export default function Features() {
  const testimonialStats = [
    { icon: Star, value: '4.9/5', label: 'Customer Rating' },
    { icon: Users, value: '50K+', label: 'Happy Customers' },
    { icon: TrendingUp, value: '98%', label: 'Success Rate' }
  ];

  return (
    <section id="features" className="section-padding relative overflow-hidden bg-gradient-to-b from-white to-gold/5">
      <BackgroundEffects variant="features" />

      {/* Additional decorative elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-gold/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gold/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container-custom">
        <SectionHeader 
          eyebrow="The Muscle DNA Advantage"
          title="Excellence in Every Molecule"
          description="Where uncompromising quality meets revolutionary science to create supplements that don't just meet standards—they redefine them"
          className="mb-10 md:mb-12 lg:mb-16"
        />

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8 mb-12 md:mb-16 lg:mb-20"
        >
          {testimonialStats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="flex items-center gap-3 bg-white/90 backdrop-blur-sm border-2 border-gold/20 rounded-2xl px-5 md:px-7 py-4 md:py-5 shadow-lg hover:shadow-2xl hover:border-gold/40 transition-all"
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-to-br from-gold/20 to-gold/5 rounded-xl flex items-center justify-center">
                <stat.icon className="w-6 h-6 md:w-7 md:h-7 text-gold" />
              </div>
              <div className="text-left">
                <p className="font-display text-xl md:text-2xl lg:text-3xl font-bold text-foreground">
                  {stat.value}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Features Grid */}
        <AnimatedContainer 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          staggerChildren={0.1}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </AnimatedContainer>

        {/* Why Choose Us Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 md:mt-20 lg:mt-24 relative"
        >
          <div className="bg-gradient-to-br from-gold/10 via-white to-gold/5 rounded-3xl md:rounded-[2.5rem] border-2 border-gold/30 p-8 md:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            {/* Floating sparkles */}
            <motion.div
              className="absolute top-8 right-8 text-gold/20"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              <Sparkles className="w-12 h-12 md:w-16 md:h-16" />
            </motion.div>

            <div className="relative z-10">
              <div className="text-center mb-10 md:mb-14">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="inline-flex items-center gap-2 bg-gold/20 px-4 py-2 rounded-full mb-4"
                >
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold font-bold text-xs md:text-sm uppercase tracking-wider">
                    Why Choose Muscle DNA
                  </span>
                </motion.div>
                <h3 className="font-display text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                  The Complete Performance Solution
                </h3>
                <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-3xl mx-auto">
                  We don't just sell supplements—we deliver a complete transformation system backed by science and proven results
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {[
                  {
                    title: 'Personalized Nutrition',
                    desc: 'Tailored supplement plans based on your unique genetic profile and fitness goals',
                    icon: '🧬'
                  },
                  {
                    title: 'Expert Support',
                    desc: '24/7 access to certified nutritionists and fitness coaches for guidance',
                    icon: '👨‍⚕️'
                  },
                  {
                    title: 'Progress Tracking',
                    desc: 'Advanced analytics and insights to monitor your transformation journey',
                    icon: '📊'
                  },
                  {
                    title: 'Premium Ingredients',
                    desc: 'Only the highest quality, clinically-tested ingredients in optimal dosages',
                    icon: '⚗️'
                  },
                  {
                    title: 'Fast Delivery',
                    desc: 'Free express shipping worldwide with discreet, eco-friendly packaging',
                    icon: '🚀'
                  },
                  {
                    title: 'Money-Back Guarantee',
                    desc: '100% satisfaction guaranteed or your money back within 60 days',
                    icon: '💯'
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                    whileHover={{ y: -5 }}
                    className="bg-white/80 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 hover:border-gold/40 hover:shadow-xl transition-all group"
                  >
                    <div className="text-4xl md:text-5xl mb-4 group-hover:scale-110 transition-transform">
                      {item.icon}
                    </div>
                    <h4 className="font-bold text-base md:text-lg text-foreground mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Bottom CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-10 md:mt-12 text-center"
              >
                <p className="text-sm md:text-base text-muted-foreground mb-4">
                  Ready to experience the Muscle DNA difference?
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gold hover:bg-gold-dark text-white px-8 md:px-10 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center gap-2"
                >
                  Start Your Journey
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </motion.button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
